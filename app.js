
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const setupSwagger = require("./swagger");
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const horoscopeRoutes = require('./routes/horoscopeRoutes');

const app = express();
app.use(express.json());
setupSwagger(app); 
app.use(cors());

app.use('/auth', authRoutes);
app.use('/horoscope', horoscopeRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.error(err));
