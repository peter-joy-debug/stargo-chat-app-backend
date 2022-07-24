const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: "Country is required!",
    },
    city: {
        type: String,
        required: "City name is required!",
      },
    postalcode:
    {
        type: String
    }
  }
 );

  module.exports = mongoose.model('address_info', addressSchema);
