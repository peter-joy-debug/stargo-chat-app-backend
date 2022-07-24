const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: "Firstname is required!",
    },
    lastname: {
        type: String,
        required: "Lastname is required!",
      },
    email: {
      type: String,
      required: "Email is required!",
    },
    gender: {
        type: String,
        required: "Gender is required!",
    },
    phone: {
        type: String,
        required: "Phone is required!",
    },

    username: {
      type: String,
      required: "Username is required!",
    },
    password: {
      type: String,
      required: "Password is required!",
    },
    role: {
        type: String,
        default: "user",
    },

    folks: [
        {
          type: mongoose.Types.ObjectId,
          ref: "user",
        },
    ],

    folksrequested: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
  ],

    blockedfolks: [
        {
          type: mongoose.Types.ObjectId,
          ref: "user",
        },
    ],

    avatar: {
        type: String,
        default:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    },

    saved: [
        {
          type: mongoose.Types.ObjectId,
          ref: 'post'
        }
      ],

    address: [
    {
        type: mongoose.Types.ObjectId,
        ref: 'address_info'
    }
    ],

    education: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'studied'
        }
    ],

    conference_created: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'conference'
        }
    ],

    conference_attended: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'conference'
        }
    ],



  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);