const mongoose = require('mongoose');
var USERESCHEMA ={
  foto: String,
  nombre: String,
  email: String,
  password: String,
}
const USER = mongoose.model("users", USERESCHEMA);
module.exports = USER;
