// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'k2fqe1if4c7uowsh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'r3tlss1iup0974ln',
    password: 'jz3rw9j0ectbvoyw',
    database: 'zmybqv0xzdrutv2t'
  })
}
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
