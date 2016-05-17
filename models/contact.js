var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  email: String,
  mobile: String,
  location: String,
  created_at: Date,
  updated_at: Date
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
