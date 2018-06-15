var express = require('express');
var http = require('http');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');
var io = require('socket.io')();

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.locals.siteTitle = 'Roux Meetups';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

var PORT = process.env.PORT || 3000;
// app.get('/', (req, res) =>
//     res.send(`Node and express server is running on port ${PORT}`)
// );

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     console.log(app.get('port'));
//     res.end('new Hello, world!');
//
// }).listen(process.env.PORT || 3000);

//console.log('Listening on port: Gaurav ');


io.attach(server);
io.on('connection', function(socket) {
  socket.on('postMessage', function(data) {
    io.emit('updateMessages', data);
  });
});

reload(server, app);
