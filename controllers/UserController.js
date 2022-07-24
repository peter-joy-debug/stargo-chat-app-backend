const Users = require("../models/User");

const UserController = {
  searchUser: async (req, res) => {
    try {
      const users = await Users.find({
        username: { $regex: req.query.username },
      })
        .limit(10)
        .select("firstname username avatar lastname email phone");

      res.json({ users });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await Users.findById(req.params.id)
        .select("-password")
        .populate("folks blockedfolks", "-password");

      if (!user) {
        return res.status(400).json({ msg: "requested user does not exist." });
      }

      res.json({ user });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const {
        firstname,
        lastname,
        gender,
        phone,
        avatar
      } = req.body;
      if (!firstname) {
        return res.status(400).json({ msg: "Please add your Firstname." });
      }

      await Users.findOneAndUpdate(
        { _id: req.user._id },
        { firstname,lastname,gender,phone,avatar}
      );

      res.json({ msg: "Profile updated successfully." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  addFolks: async (req, res) => {
    try {
      const user = await Users.find({
        _id: req.params.id,
        folks: req.user._id,
      });
      if (user.length > 0)
        return res
          .status(500)
          .json({ msg: "You are already following this user." });



      const newUser = await Users.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: {
            folks: req.user._id
          },
        },
        { new: true }
      ).populate("folks folksrequested", "-password");

      await Users.findOneAndUpdate(
        { _id: req.user._id },
        { $push: { folksrequested: req.params.id } },
        { new: true }
      );

      res.json({ newUser });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  blockFolk: async (req, res) => {
    try {
      

      const newUser = await Users.findOneAndUpdate(
        { _id: req.params.id },
        {
          $pull: { folks: req.user._id }
        },
        { new: true }
      ).populate('folks folksrequested', '-password');

      await Users.findOneAndUpdate(
        { _id: req.user._id },
        { $pull: { folksrequested: req.params.id } },
        { new: true }
      );

      res.json({ newUser });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  suggestionsUser: async (req, res) => {
    try {
      const newArr = [...req.user.folksrequested, req.user._id];

      const num = req.query.num || 10;
      const users = await Users.aggregate([
        { $match: { _id: { $nin: newArr } } },
        { $sample: { size: Number(num) } },
        {
          $lookup: {
            from: "users",
            localField: "folks",
            foreignField: "_id",
            as: "folks",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "folksrequested",
            foreignField: "_id",
            as: "folksrequested",
          },
        },
      ]).project("-password");

      return res.json({
        users,
        result: users.length,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },



};

module.exports = UserController;