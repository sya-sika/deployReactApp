process.env.TZ = 'Asia/Tokyo';
const express = require('express');
//サーバーオブジェクトの組み立て
const app = express();
//const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
//const server = require('http').createServer(app);
//serverの中にはサーバーオブジェクトがあり？
//const io = require('socket.io').listen(server);

const notifier = require('node-notifier');

let requestTimeString = "";

app
.get("/", (req,res) => {
    res.sendFile(__dirname + '/public/index.html');
})
.post('/', (req, res) => {
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
    /*
    //使わなかったのショック
    //forEach,mapが使えるのは配列のみ、連想配列で使うときはObject.keys(連想配列のキー)を使う！
    const requestTimeArray = Object.keys(req.body).map((key) => {
        return req.body[key];
        console.log(currentDate+' ');
        requestTimeString += currentDate.toString();
        if(index < 2){
            requestTimeString += '-';
        } else if(index === 3) {
            requestTimeString += 'T';
        } else if(index){

        }
    });
    */
   //reqTimeStamp =  reqTimeStamp.getTime() + 60000 * 60 * 9;
   console.dir(req.body);
   console.log(reqTimeStamp);
   console.log(nowTime);
    setTimeout(() => {
        notifier.notify({
            'title': "通知",
            'message': "こんにちは"
        });
    },(reqTimeStamp - nowTime));
});


let timetime = new Date();
//オブジェクトを表示しようとしない！
console.log((new Date())-(new Date('2019-10-27T18:51:00')));

//過去のもの
/*
const html = require('fs').readFileSync('../public/index.html');
const http = require('http').createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});
*/

/*
app.listen(3000, () => {
    console.log('routing...');
});
*/


app.listen(process.env.PORT)
 