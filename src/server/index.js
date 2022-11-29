const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Settings
app.set('port', PORT || 3008);
app.use(cors());

// Load static multimedia
app.use(express.static(__dirname + '/public'));

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/main.js'))
  .use(require('./routes/projects.js'))
  .use(require('./routes/members.js'))
  .use(require('./routes/contact-request.js'))
  .use(require('./routes/project-request.js'))
  .use(require('./routes/vinculation-request.js'))
  .use(require('./routes/events.js'))
  .use(require('./routes/admin-solicitudes.js'));

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});