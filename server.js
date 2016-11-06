var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var tmclient = require('textmagic-rest-client');
//app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Body parser use JSON data

// image files
app.get('/checkmark.png', function(req, res) {
    res.sendFile(__dirname + '/checkmark.png');
});

app.get('/check-xray.jpg', function(req, res) {
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
    res.sendFile(__dirname + '/receiving.html');
});

// css files
app.get('/tx.css', function(req, res) {
    res.sendFile(__dirname + '/tx.css');
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
    var patientid = req.body.id;
    url = req.protocol + '://' + req.get('host') + '/receiving.html';
    var c = new tmclient('mainakchowdhury', 'DgqCit7iyRXCAnb0A6niGthgLQgLuU');
    c.Messages.send({text: url, phones:'19492943766'}, function(err, res){
       console.log('Messages.send()', err, res);
    });
    res.send(url);
});

app.get('/reception', function(req, res) {
    var id = req.query.id;
    res.sendFile(__dirname + '/received_patient' + id + '.html');
    console.log(id);
});

app_new = app.listen(process.env.PORT||3772);
//console.log("Server Running on ", PORT);
