import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/popper.js/dist/popper.js'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

const EditStatus = () => {
    //year, month, date, hour, minute

    //year
    const year = [2019,2020,2021]
    const month = []
    const date = []
    const hour = [0]
    const minute = [0]
    const second = [0]

    for(let i=1;i<60;i++){
        if(i <= 12) {
            //0なし
            month[i-1] = i
        }
        if(i < 24) {
            hour[i] = i;
        }
        if(i <= 31) {
            //0なし
            date[i-1] = i
        }
        minute[i] = i
        second[i] = i
    }
    console.log(minute[59])

    const nowTime = new Date();

    //フロントエンド表示用(バックエンドにデータは渡していない)
    /*
    function submitTask() {
        //ドキュメント定義
        const documentYear = document.getElementById('selectYear')
        const documentMonth = document.getElementById('selectMonth')
        const documentDate = document.getElementById('selectDate')
        const documentHour = document.getElementById('selectHour')
        const documentMinute = document.getElementById('selectMinute')
        const documentSecond = document.getElementById('selectSecond')
        
        documentYear.selectedIndex = 0;
        documentMonth.selectedIndex = 1;
        documentDate.selectedIndex = 1;
        documentHour.selectedIndex = 1;
        documentMinute.selectedIndex = 1;
        documentSecond.selectedIndex = 1;
        /*
        //値の参照
        const valYear = documentYear[documentYear.selectedIndex].value
        const valMonth = documentMonth[documentMonth.selectedIndex].value
        const valDate = documentDate[documentDate.selectedIndex].value
        const valHour = documentHour[documentHour.selectedIndex].value
        const valMinute = documentMinute[documentMinute.selectedIndex].value
        const valSecond = documentSecond[documentSecond.selectedIndex].value


        //const getform = document.getElementById('Forms')
        alert(valYear+'年'+valMonth+'月'+valDate+'日'+valHour+'時'+valMinute+'分'+valSecond+'秒 に通知を表示します。')
        //documentMonth.removeChild(documentMonth.childNodes[1])
    }
    */

    return(
        <div>
            {/* ナビバー周辺 */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a href="./"><h4 className="navbar-brand col-1 py-2">Title</h4></a>
            <a href="#" className="nav-item nav-link text-light offset-1">Home</a>
            <a href="#" className="nav-item nav-link text-light">My-Tasks</a>
        </nav>

            {/* アコーディオン(コラプス) */}
        <div className="accordion col-7 offset-2" id="accordion-4">
            <div className="card">
                <div className="card-header" id="header-4">
                    <button className="btn btn-link" type="button"
                        data-toggle="collapse" data-target="#exampleAcc"
                        aria-expanded="true" aria-controls="exampleAcc">
                            押すと開きます。
                    </button>
                </div>
                <div className="collapse" id="exampleAcc"
                    aria-labelledby="header-4" data-parent="#accordion-4">
                    <div className="card-body">Hello!</div>
                    <button className="btn btn-primary">おはようございます</button>
                </div>
            </div>
        </div>

            {/* フォーム */}
        <form id="Forms" method="POST">
        <div className="form-row align-item-center mt-4">
            <select name="year" id="selectYear" className="form-control col-1 offset-2" defaultValue={nowTime.getFullYear()}>
                {year.map((year) => {
                    return <option key={"hour" + year.toString()}>{year}</option>
                })}
            </select>
            <p>年</p>
            <select name="month" id="selectMonth" className="form-control col-1" defaultValue={nowTime.getMonth()+1}>
                {month.map((month) => {
                    return <option key={"hour" + month.toString()}>{month}</option>
                })}
            </select>
            <p>月</p>
            <select name="date" id="selectDate" className="form-control col-1" defaultValue={nowTime.getDate()}>
                {date.map((date) => {
                    return <option key={"hour" + date.toString()}>{date}</option>
                })}
            </select>
            <p>日</p>
            <select name="hour" id="selectHour" className="form-control col-1" defaultValue={nowTime.getHours()}>
                {hour.map((hour) => {
                    return <option key={"hour" + hour.toString()}>{hour}</option>
                })}
            </select>
            <p>時</p>
            <select name="minute" id="selectMinute" className="form-control col-1" defaultValue={nowTime.getMinutes()}>
                {minute.map((minute) => {
                    return <option key={"hour" + minute.toString()}>{minute}</option>
                })}
            </select>
            <p>分</p>
            <select name="second" id="selectSecond" className="form-control col-1" defaultValue={nowTime.getSeconds()}>
                {minute.map((second) => {
                    return <option key={"hour" + second.toString()}>{second}</option>
                })}
            </select>
            <p>秒</p>
            <button type="submit" className="btn btn-primary">送信する</button>
        </div>
        </form>
        </div>
    )
}

ReactDOM.render(
    <EditStatus />,
    document.getElementById('root')
)
