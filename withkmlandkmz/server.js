var express = require('express'),
    path    = require('path'),
    app     = express();

app.use(express.static('.'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/map.html'));
});

var server = app.listen(9615, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
