const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;

const connectionString = process.env.MONGO_URI;

const connectDb = async () => {
 try {
     await mongoose.connect(connectionString, {
         useNewUrlParser: true,
         useUnifiedTopology: true
     });
     console.log("MongoDB Connected");
 } catch (err) {
     console.log(err);
 }
};
connectDb();