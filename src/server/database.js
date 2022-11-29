const mySql = require('mysql');
const DataAccessObject = require('/LLT/backend/DB-management/SQL/DAO.js');

const db = 'testdb';

const connection = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: db
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`${db} database connected successfully`);
  }
});

const DAO = new DataAccessObject(connection);

module.exports = DAO;