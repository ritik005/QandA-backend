const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const connectionString = 'mongodb+srv://ritikv:ritik@12345@cluster0.l20g4.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
 useNewUrlParser: true,
 useUnifiedTopology: true
})
 .then(() => app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`)))
 .catch( error => console.log(error.message));
 mongoose.set('useFindAndModify', false);
