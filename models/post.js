//require mongoose
const mongoose = require("mongoose");

//create Schema

const postSchema = new mongoose.Schema({
  news: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
