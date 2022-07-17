const express = require("express");
const app = express();
//Conexão ao mysql
const mysql = require("mysql");

app.get("/", (req, res) => {
  res.send("Hello Word!!");
});

app.listen(3011, () => {
  console.log("rodando servidor");
});
