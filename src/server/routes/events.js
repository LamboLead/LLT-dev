const express = require('express');
const router = express.Router();

const command = require('../../classes/commands.js');
const DAO = require('../database.js');
const RequestHandler = require('../../classes/RequestHandler.js');

router.get('/eventos', async (req, res) => {
  const handler = new RequestHandler([
    {
      name: 'getEventData',
      function: async () => {
        let fetchedRows = DAO.executeCommand(
          new command.Get('events_view', {
              fields: req.query.fields,
              conditions: req.query,
              order: req.query.order,
              limit: req.query.limit
          })
        );
        return fetchedRows;
      }
    }
  ]);
  res.json(await handler.execute());
});

module.exports = router;