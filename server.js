const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.MONGOLAB_URI || dbConfig.url)
.then (() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Database connection unsuccessful');
  process.exit();
});

app.get('/', (req, res) => {
  res.render('index');
})

require('./app/routes/user.routes.js')(app);

app.listen(3000, function () {
  console.log('Listening on port 3000')
})


