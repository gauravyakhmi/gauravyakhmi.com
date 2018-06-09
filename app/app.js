var express = require('express');
var app = express();
var dataFile = require('./data/data.json')

// Call PORT=4000 node app.js (By default it will be port 3000)
app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);

// Express.static is middleware
// Make the app/public folder available to all routes
app.use(express.static('app/public'));

app.use(require('./routes/index'));
app.use(require('./routes/testimonials'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port' + app.get('port'));
});



// var http = require('http');
//
// var myServer = http.createServer(function(req, res) {
//   res.writeHead(200, {'content-type': 'text/html'});
//   res.write('<h1>Welcome to Gauravyakhmi.com</h1>');
//   res.end();
// });
//
// myServer.listen(3000);
// console.log('go to localhost:3000 to your browser');
