// Client model
var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema(({
    last_name: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    }
}));

module.exports = mongoose.model('client', clientSchema)