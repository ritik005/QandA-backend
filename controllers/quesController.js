const Ques = require("../models/Ques");

const getQues = async (req, res) => {
  try {
    const ques = await Ques.find();
    res.status(200).json(ques);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const postQues = async (req, res) => {
 const ques = req.body;
 const newQues = new Ques(ques);
 try {
  await newQues.save();
  res.status(401).json(newQues);
 } catch (error) {
  res.status(404).json({message: error.message});
 }
};

module.exports = { getQues, postQues };
