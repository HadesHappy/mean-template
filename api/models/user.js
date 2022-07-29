const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 8,
    max: 255,
  },
  lastName: {
    type: String,
    required: true,
    min: 8,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
  },
  creation_dt: {
      type: Date,
      required: true
  }
});

userSchema.statics.hashPassword = function hashPassword(password) {
  return bcrypt.hashSync(password,10);
};

userSchema.methods.isValid = function (hashedPassword) {
  return bcrypt.compareSync(hashedPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);