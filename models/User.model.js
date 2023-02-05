const mongoose = require('mongoose');
const { schema } = require('./Drone.model');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema ({
    name: {
      type: String,
      required: [true, "name is required"]
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password:  {
      type: String,
      required: [true, "password is required"],
    }
})

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt
      .hash(this.password, 10)
      .then((encryptedPassword) => {
        this.password = encryptedPassword;
        next();
      })
      .catch(next);
  } else {
    next();
  }
});


const User = mongoose.model('User', userSchema);
module.exports = User;