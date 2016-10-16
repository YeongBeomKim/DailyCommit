var express = require('express');
var app = express();
var user = require('./routes/user');
var morgan = require('morgan');
var bodyParser = require('body-parser');
app.use('/', express.static('public'));

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/user',user);

app.listen(3000,function(){
  console.log('Example App listening');
});
