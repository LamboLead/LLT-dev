const express = require('express');
const router = express.Router();

const command = require('/LLT/backend/DB-management/SQL/commands.js');
const DAO = require('../database.js');
const RequestHandler = require('/LLT/backend/Requests/RequestHandler.js');

router.get('/miembros', async (req, res) => {
  const handler = new RequestHandler([
    {
      name: 'getMemberData',
      function: async () => {
        let fetchedRows = DAO.executeCommand(
          new command.Get("members_view", {
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