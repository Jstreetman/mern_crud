//Require the mongoose
const mongoose = require("mongoose");

//Create the schema
const userSchema = new mongoose.Schema({
  //Objects
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

//Set the model to the specified database collection
const User = mongoose.model("User", userSchema);

module.exports = User;
