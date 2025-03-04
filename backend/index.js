import express from "express"
import mysql from "mysql2";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
host:"localhost",
user:'root',
password:"root",
database:"kd_base"
})

app.use(express.json)
app.use(cors())

app.get("/", (req,res)=>{
res.json("Ola esse e o backend")
})

app.get("/user", (req,res)=>{
    const q = "SELECT * FROM user;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.post("/user", (req,res)=>{
    const q = "INSERT INTO user ('nome','email','senha','telefone' VALUES(?)";

    const VALUES = [
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.telefone,
    ];

    db.query (q, [values], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(201).json({message: "Usuário cadastrado com sucesso",data});
    })
})

app.listen(8800, ()=>{
console.log("Conectado no backend!1")
})