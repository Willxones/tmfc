// server.js
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

// Define routes and API endpoints here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
