require('dotenv').config();
const http = require('http');
const cors = require('cors');
const config = require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const seedDB = require('./utilities/seedDB');
const userRoutes = require('./routes/userRoutes');
const app = express();

// midlewares
app.use(cors());
app.use(express.json());

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection successfull'))
  .catch((err) => console.log(err));

seedDB();

app.use('/user', userRoutes);

// initiate the server
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('hello world');
});

// app listner
server.listen(config.PORT, () => {
  console.log('server is running in localhost:', config.PORT);
});

module.exports = app;
