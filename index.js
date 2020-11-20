require("dotenv").config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT;

require('./config/dbconnection');
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/api/user', require('./router/api/user'));

app.listen(PORT, (err) => {
 if (err) {
     console.log("Error in running server");
     return;
 }
 console.log(`Server is up and running on port ${PORT}`);
});