const pathSolver = require('../pathSolver.js');
const express = require('express');
const router = express.Router();

const tableData = require('../data/table.json');

const RequestHandler = pathSolver('/Requests/RequestHandler.js');

router.get('/', async (req, res) => {
  const handler = new RequestHandler([
    {
      name: `getTableData`,
      function: () => {
        return JSON.parse(JSON.stringify(tableData));
      }
    }
  ]);
  res.json(await handler.execute());
});

module.exports = router;