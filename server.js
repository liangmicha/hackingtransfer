var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var tmclient = require('textmagic-rest-client');
//app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Body parser use JSON data

var globalhash = {};
var globaltimestamp = {};
var c = new tmclient(process.env.TXTUSERNAME, process.env.TXTPASSWORD);

function delete_old_records () {
    var time_cutoff = Math.floor(Date.now() / 1000) - 120;
    // two mins cutoff
    Object.keys(globalhash).forEach(function(key) {
      if (globaltimestamp[key] < time_cutoff) {
          delete globaltimestamp[key];
          delete globalhash[key];
      }
    });
}

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
	delete_old_records();
        var num = globalhash[req.query.hash];
	console.log(num);

	if (process.env.TXT_NOTIFY=='1' && num != null) {
            c.Messages.send({text: 'Record ' + req.query.hash + ' accessed', phones:num}, function(err, res){
               console.log('Messages.send()', err, res);
            });
	}
 
        console.log(globalhash);
	if (num != null) res.sendFile(__dirname + '/receiving.html');
	else res.send('Record expired\n');

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
    console.log(process.env.DEBUG, process.env.DEBUG=='0');
    res.sendFile(__dirname + '/tx2.html');
});

app.post('/api', function(req, res) {
    console.log("Inside api\n");
    console.log(req.body.id);
    var rnd = Math.floor(Math.random()*100000000);
    console.log(rnd, " ", req.body.id);
    globalhash[rnd] = req.body.id;
    globaltimestamp[rnd] = Math.floor(Date.now() / 1000);

    url = req.protocol + '://' + req.get('host') + '/receiving.html?hash=' + rnd.toString();
    console.log(url);
    console.log(globaltimestamp[rnd], globaltimestamp[rnd] + 1);

    var number = process.env.DEBUG_PHONE;
    if (process.env.DEBUG == '0') number = process.env.PRODUCTION_PHONE;
    if (process.env.TXT_NOTIFY == '1') {
        c.Messages.send({text: url, phones:number}, function(err, res){
           console.log('Messages.send()', err, res);
        });
    }

    res.send("Hello");
});

app.get('/reception', function(req, res) {
    var id = req.query.id;
    res.sendFile(__dirname + '/received_patient' + id + '.html');
    console.log(id);
});

PORT = 3793;
app_new = app.listen(process.env.PORT||PORT);
console.log("Server Running on ", PORT);
