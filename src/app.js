const express = require('express');
const cors = require('cors');

const serverRoutes = require('./api/server');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1/', serverRoutes);

module.exports = app;