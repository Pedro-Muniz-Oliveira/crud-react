const express = require("express");
const app = express();
//Conexão ao mysql
const mysql = require("mysql");
const cors = require("cors");
const { json } = require("express");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Pedro@2003",
  database: "crud-na-pratica",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;

  let SQL = "INSERT INTO users(nome,custo) VALUES(?,?)";
   
    db.query(SQL, [name,cost], (err, result) => {
        console.log(err);
    });

  //console.log(name);
});

/* primeiro teste do banco
app.get("/", (req, res) => {
  //res.send("Hello Word!!");
  let SQL = "INSERT INTO users( nome, custo) values('Pedro', 35000)";
  dp.query(SQL, (err, result) => {
    console.log(err);
    //console.log(result);
  });
});*/

app.listen(3007, () => {
  console.log("rodando servidor");
});
