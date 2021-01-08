import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vietnam-city"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
})

module.exports = connection;
