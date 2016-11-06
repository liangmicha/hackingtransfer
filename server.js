var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var tmclient = require('textmagic-rest-client');
//app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); // Body parser use JSON data
  
app.get('/checkmark.png', function(req, res) {
    res.sendFile(__dirname + '/checkmark.png');
});

app.get('/tx.css', function(req, res) {
    res.sendFile(__dirname + '/tx.css');
});

app.get('/tx.js', function(req, res) {
    res.sendFile(__dirname + '/tx.js');
});

app.get('/receiving.js', function(req, res) {
    res.sendFile(__dirname + '/receiving.js');
});

app.get('/receiving.css', function(req, res) {
    res.sendFile(__dirname + '/receiving.css');
});

app.get('/patient_icon.jpg', function(req, res) {
    res.sendFile(__dirname + '/patient_icon.jpg');
});

app.get('/bootstrap.css', function(req, res) {
    res.sendFile(__dirname + '/bootstrap.css');
});

app.get('/submit.js', function(req, res) {
    res.sendFile(__dirname + '/submit.js');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/tx.html');
});

app.get('/tx.html', function(req, res) {
    res.sendFile(__dirname + '/tx.html');
});

app.get('/rx.html', function(req, res) {
    res.sendFile(__dirname + '/rx.html');
});

app.post('/api', function(req, res) {
    console.log(req);
    console.log(req.body);
    var patientid = req.body.id;
    url = req.protocol + '://' + req.get('host') + '/reception' + '?id=' + patientid;
    var c = new tmclient('mainakchowdhury', 'DgqCit7iyRXCAnb0A6niGthgLQgLuU');
    //c.Messages.send({text: url, phones:'16507984232'}, function(err, res){
    //    console.log('Messages.send()', err, res);
    //});
    console.log(url);
    res.send(url);
});

app.get('/reception', function(req, res) {
    var id = req.query.id;
    res.sendFile(__dirname + '/received_patient' + id + '.html');
    console.log(id);
});

app_new = app.listen();
//console.log("Server Running on ", PORT);
