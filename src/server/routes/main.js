const express = require('express');
const router = express.Router();

const command = require('/LLT/backend/DB-management/SQL/commands.js');
const DAO = require('../database.js');
const RequestHandler = require('/LLT/backend/Requests/RequestHandler.js');

router.get('/', async (req, res) => {
  const handler = new RequestHandler([
    {
      name: `get${req.query.table}Data`,
      function: async () => {
        let fetchedRows = DAO.executeCommand(
          new command.Get(req.query.table, {
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