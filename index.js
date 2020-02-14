// Import dependencies

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Import router
let routes = require('./routes');

let app = express();
var port = process.env.PORT || 3000;

// We first instruct bodyParser to parse the data received

// Use bodyParser to parse urlencoded data sent in the body
app.use(bodyParser.urlencoded({
    extended: true
}));

// Use bodyParser to parse json data sent with Content-Type: application/json
app.use(bodyParser.json());

// Now we add our routing, which is abstracted in a routes.js file
app.use('/', routes);

// Start the server
app.listen(port, () => {
    console.log("Running server on port " + port);
});

