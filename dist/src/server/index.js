'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = _http2.default.createServer(app);
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  return res.send('hola');
});

server.listen(port, function () {
  return console.log('Server listening on port ' + port);
});