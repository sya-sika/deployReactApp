process.env.TZ = 'Asia/Tokyo';
const express = require('express');
//サーバーオブジェクトの組み立て
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const notifier = require('node-notifier');


app
.get("/", (req,res) => {
    res.sendFile(__dirname + '/public/index.html');
})
.post('/', (req, res) => {
    //リロードはリクエスト使う、ブラウザバックは使わない
    res.sendFile(__dirname + '/public/index.html');

    const nowTime = new Date();
    
    const reqTime = req.body
    let reqTimeStamp = new Date(
        reqTime.year,
        reqTime.month-1,
        reqTime.date,
        reqTime.hour,
        reqTime.minute,
        reqTime.second,);

   console.dir(req.body);
   console.log(reqTimeStamp);
   console.log(nowTime);
    setTimeout(() => {
        notifier.notify({
            'title': "通知",
            'message': "こんにちは"
        });
    },(reqTimeStamp - nowTime));
})

app.listen(3000, () => {
    console.log('routing...');
});


//heroku用
/*
app.listen(process.env.PORT)
*/
