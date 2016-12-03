var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var tmclient = require('textmagic-rest-client');
//app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Body parser use JSON data

var globalhash = {};

// image files
app.get('/checkmark.png', function(req, res) {
    res.sendFile(__dirname + '/checkmark.png');
});

app.get('/chest-xray.jpg', function(req, res) {
    res.sendFile(__dirname + '/chest-xray.jpg');
});

app.get('/patient-icon.jpg', function(req, res) {
    res.sendFile(__dirname + '/patient-icon.jpg');
});

app.get('/elderly-woman.png', function(req, res) {
    res.sendFile(__dirname + '/elderly-woman.png');
});

app.get('/check.png', function(req, res) {
    res.sendFile(__dirname + '/check.png');
});

app.get('/patient_icon.jpg', function(req, res) {
    res.sendFile(__dirname + '/patient_icon.jpg');
});

// html files
app.get('/confirm.html', function(req, res) {
    res.sendFile(__dirname + '/confirm.html');
});

app.get('/tx2.html', function(req, res) {
    res.sendFile(__dirname + '/tx2.html');
});

app.get('/tx2.css', function(req, res) {
    res.sendFile(__dirname + '/tx2.css');
});

app.get('/receiving.html', function(req, res) {
    var num = globalhash[req.query.hash];
    var c = new tmclient('anjalidatta', 'j78hZTKazcpoJPbCb4JtLsHJwd6Yh2');
    c.Messages.send({text: url, phones:num}, function(err, res){
       console.log('Messages.send()', err, res);
    });
 
    console.log('Deleting' + req.query.hash);
    delete globalhash[req.query.hash];
    console.log(globalhash);
    res.sendFile(__dirname + '/receiving.html');
});

// css files
app.get('/tx2.css', function(req, res) {
    res.sendFile(__dirname + '/tx2.css');
});

app.get('/receiving.css', function(req, res) {
    res.sendFile(__dirname + '/receiving.css');
});

app.get('/bootstrap.css', function(req, res) {
    res.sendFile(__dirname + '/bootstrap.css');
});

// js files
app.get('/tx.js', function(req, res) {
    res.sendFile(__dirname + '/tx.js');
});

app.get('/receiving.js', function(req, res) {
    res.sendFile(__dirname + '/receiving.js');
});

app.get('/submit.js', function(req, res) {
    res.sendFile(__dirname + '/submit.js');
});


// default route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/tx2.html');
});

app.post('/api', function(req, res) {
    console.log("Here I am\n");
    console.log(req.body.id);
    var rnd = Math.floor(Math.random()*100000000);
    console.log(rnd, " ", req.body.id);
    globalhash[rnd] = req.body.id;

    url = req.protocol + '://' + req.get('host') + '/receiving.html?hash=' + rnd.toString();
    var c = new tmclient('anjalidatta', 'j78hZTKazcpoJPbCb4JtLsHJwd6Yh2');
    console.log(url);
    //c.Messages.send({text: url, phones:'19492943766'}, function(err, res){
    c.Messages.send({text: url, phones:'18172699548'}, function(err, res){
       console.log('Messages.send()', err, res);
    });
    res.send("Hello");
});

app.get('/reception', function(req, res) {
    var id = req.query.id;
    res.sendFile(__dirname + '/received_patient' + id + '.html');
    console.log(id);
});

PORT = 3772;
app_new = app.listen(process.env.PORT||PORT);
console.log("Server Running on ", PORT);
