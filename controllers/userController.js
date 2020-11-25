const bcrypt = require("bcryptjs");
const User = require("../models/User");

const loginUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(200)
        .json({ message: "User not registered", user: null });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(200).json({ message: "Invalid password", user: null });

    const token = user.generateAuthToken();
    res.header("x-auth-token", token);
    return res.status(200).json({
      message: `login success`,
      user: user,
      token,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error while signing in", user: null });
  }
};

const createUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(200)
        .json({ message: "email already exist", user: null });

    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();
    return res
      .status(200)
      .json({ message: "user created successfully", newUser });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "error while creating user", user: null });
  }
};

module.exports = { loginUser, createUser };
