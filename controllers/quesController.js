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
 try{
 await newQues.save();
 return res.json(newQues);
 } catch(error){
  return res.json({message: error})
 }
//   try {
//  const ques = req.body;
//  const newQues = new Ques(ques);
//  console.log(newQues);
 
//   // await newQues.save();
//   return res.status(401).json(newQues);
// } catch (error) {
//   return res.status(404).json({message: error.message});
//  }
};

module.exports = { getQues, postQues };
