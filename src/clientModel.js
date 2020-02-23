// Client model
const { Schema, model } = require('mongoose');

const requiredString = {
  type: String,
  required: true,
};

const clientSchema = new Schema({
  last_name: requiredString,
  first_name: requiredString,
  email: requiredString,
  phone: requiredString,
}, {
  timestamps: true,
});

module.exports = model('client', clientSchema);
