const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    university: {
      type: String,
    },
    secondary: {
        type: String,
      },
  }
 );

  module.exports = mongoose.model('studied', educationSchema);
