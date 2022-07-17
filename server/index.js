const express = require("express");
const app = express();

//Conexão ao mysql
const mysql = require("mysql");

const dp = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Pedro@2003",
  database: "crud-na-pratica",
});

app.get("/", (req, res) => {
  //res.send("Hello Word!!");

  let SQL = "INSERT INTO users( nome, custo) values('Pedro', 35000)";

  dp.query(SQL, (err, result) => {
    console.log(err);
    console.log(result);
  });
});

app.listen(3011, () => {
  console.log("rodando servidor");
});


