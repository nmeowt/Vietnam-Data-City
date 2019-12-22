import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "nmt",
  password: "nmt99",
  database: "vietnam-city"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
})

module.exports = connection;
