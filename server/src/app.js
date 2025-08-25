// Express app setup and middleware registration.
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


// Hello world route for testing
const helloRoute = require('./routes/hello');
app.use('/api/hello', helloRoute);

module.exports = app;
