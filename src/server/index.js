const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Settings
app.set('port', PORT || 3006);
app.use(cors());

// Load static multimedia
app.use(express.static(__dirname + '/public'));

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/table.js'));

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});