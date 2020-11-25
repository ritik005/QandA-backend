require("dotenv").config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
 name: {
  type: String,
  required: true
 },
 email: {
  type: String,
  required: true
 },
 password: {
  type: String,
  required: true
 }
});

UserSchema.methods.generateAuthToken = ()=> {
 const token = jwt.sign(
   {
     _id: this._id,
     email: this.email,
     name: this.name
   },
   process.env.JWT_PRIVATE_KEY,
   {
     expiresIn:'1D'
   }
 );
 return token;
};

module.exports = User = mongoose.model('user', UserSchema)