var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);

app.get('/', (req, res) => {
  res.json(200);
});

app.get('/webhooks/inward-sms', (req, res) => {
  console.log(req.query);
  res.json(200);
});

app.post('/chat-register', function (request, response) {
  userANumber = request.body.userANumber;
  userBNumber = request.body.userBNumber;
  //your code here

  response.json({status: "chat between " + userANumber + ' and ' + userBNumber,
    userANumber: 'virtual number 1',
    userBNumber: 'virtual number 2'}
  );
});