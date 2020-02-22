// Import dependencies
const console = require('console');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// Import router
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
}));


// We first instruct bodyParser to parse the data received

// Use bodyParser to parse urlencoded data sent in the body
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Use bodyParser to parse json data sent with Content-Type: application/json
app.use(bodyParser.json());

// Now we add our routing, which is abstracted in a routes.js file
app.use('/', routes);


app.use((req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '' : error.stack,
  });
});


// Connect to database using new parser and new connection management
// Add compatibility so we can also run it inside a Docker container
const dbserver = process.env.DBSERVER || 'localhost';
mongoose.connect(`mongodb://${dbserver}:27017/nodemongoapi`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the server
app.listen(port, () => {
  console.log(`Running server on http://localhost:${port}`);
});
