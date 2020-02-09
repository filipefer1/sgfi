const express = require('express');
const mongoose = require('mongoose');

const temasRoutes = require('./routes/temas');

const app = express();

app.use(express.json());
app.use(temasRoutes);

mongoose.connect('mongodb+srv://filipe:255287@noqslmodule-kf7s8.mongodb.net/sgfi?authSource=admin&replicaSet=noqslModule-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(3333);
    console.log('Server listening on port 3333');
  });
