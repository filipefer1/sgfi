require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');

const temasRoutes = require('./routes/temas');

const app = express();

app.use(express.json());
app.use(temasRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(3333);
    // eslint-disable-next-line no-console
    console.log('Server listening on port 3333');
  });
