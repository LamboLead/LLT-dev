const express = require('express');
const router = express.Router();

const command = require('/LLT/backend/DB-management/SQL/commands.js');
const DAO = require('../database.js');
const RequestHandler = require('/LLT/backend/Requests/RequestHandler.js');

router.get('/repositorio', async (req, res) => {
  const handler = new RequestHandler([
    {
      name: 'getProjectData',
      function: async () => {
        let fetchedRows = await DAO.executeCommand(
          new command.Get("repository_view", {
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
  // let results = await handler.execute();
  // console.log(results);
  res.json(await handler.execute());
  
});

module.exports = router;