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

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
res.json("Ola esse e o backend")
})

//ADMIN 

app.get("/admin", (req,res)=>{
    const q = "SELECT * FROM admin;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.post("/admin", (req,res)=>{
    console.log("Dados recebidos:", req.body);
    const VALUES = [
        req.body.nome,
        req.body.email,
        req.body.senha,
    ];
    const q = "INSERT INTO admin (nome, email, senha )  VALUES(?,?,?)";

    db.query(q, VALUES, (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Admin cadastrado com sucesso",data});
    })
})

//empresa

app.get("/empresa", (req,res)=>{
    const q = "SELECT * FROM empresa;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.post("/empresa", (req,res)=>{
    console.log("Dados recebidos:", req.body);
    const VALUES = [
        req.body.nome,
        req.body.descricao,
        req.body.admin_id,
    ];
    const q = "INSERT INTO empresa (nome, endereco, empresa_id )  VALUES(?,?,?)";

    db.query(q, VALUES, (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Empresa cadastrada com sucesso",data});
    })
})

//AGENCIA

app.get("/agencia", (req,res)=>{
    const q = "SELECT * FROM agencia;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.post("/agencia", (req,res)=>{
    console.log("Dados recebidos:", req.body);
    const VALUES = [
        req.body.nome,
        req.body.endereco,
        req.body.empresa_id,
    ];
    const q = "INSERT INTO agencia (nome, endereco, empresa_id )  VALUES(?,?,?)";

    db.query(q, VALUES, (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Agencia cadastrada com sucesso",data});
    })
})


app.get("/user", (req,res)=>{
    const q = "SELECT * FROM user;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.post("/user", (req,res)=>{
    console.log("Dados recebidos:", req.body);
    const VALUES = [
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.telefone,
    ];
    const q = "INSERT INTO user (nome, email, senha , telefone)  VALUES(?,?,?,?)";

    db.query(q, VALUES, (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Usuário cadastrado com sucesso",data});
    })
})

app.listen(8800, ()=>{
console.log("Conectado no backend!1")
})