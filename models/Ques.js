const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuesSchema = new Schema({
  title: String,
  description: String,
  // creator: String,
  tags: String,
  uproveCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = Ques = mongoose.model('ques', QuesSchema);