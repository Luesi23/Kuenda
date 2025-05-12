import express from "express"
import mysql from "mysql2";
import cors from "cors";
import jwt from 'jsonwebtoken';
import { autenticarToken, apenasAdmin } from './middlewares/auth.js';



const app = express()


const db = mysql.createConnection({
host:"localhost",
user:'root',
password:"root",
database:"kd_base"
})

app.use(express.json())
app.use(cors())

//variaveis
let users_cont = 0;
let empresas_cont = 0;
let agencias_cont = 0;


//Funcao que atualiza
const atualizarContadores = async () => {
    try{        
        const [users] = await db.promise().query("SELECT COUNT(*) AS total FROM user");
        users_cont = users[0].total;

        const [empresas] = await db.promise().query("SELECT COUNT(*) AS total FROM empresa");
        empresas_cont = empresas[0].total;

        const [agencias] = await db.promise().query("SELECT COUNT(*) AS total FROM agencia");
        agencias_cont = agencias[0].total;
        
        console.log("Contadores atualizados:", { users_cont, empresas_cont, agencias_cont });
    } catch (err) {
        console.error("Erro ao atualizar contadores:", err);
    }
        };

// Atualizar contadores ao iniciar o servidor
atualizarContadores();

// Endpoint para obter os contadores
app.get("/contadores", (req, res) => {
    res.json({ users_cont, empresas_cont, agencias_cont });
});


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
        return res.status(201).json({message: "admin cadastrado com sucesso",data});
    })
})
app.get("/admin/:id", (req, res) => {
    const q = "SELECT * FROM admin WHERE id = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json({ message: "Admin não encontrado" });
        return res.json(data[0]);
    });
});
app.put("/adminupdate/:id", (req,res)=>{
    console.log("Dados recebidos:", req.body);
    const VALUES = [
        req.body.nome,
        req.body.email,
        req.body.senha,
    ];
    const id = req.params.id;
    const q = "UPDATE admin  SET nome = ?, email = ?, senha = ? WHERE id = ?";

    db.query(q, [...VALUES,id], (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Admin atualizado com sucesso",data});
    })
})

app.delete("/admin/:id", (req,res)=>{
    const id = req.params.id;
    const q = "DELETE FROM admin WHERE id = ?";

    db.query(q, [id], (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Admin Eliminado com sucesso",data});
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
        req.body.email,
        req.body.senha,
        req.body.telefone,
        req.body.id,
    ];
    const q = "INSERT INTO empresa (nome, email, senha, telefone )  VALUES(?,?,?,?)";

    db.query(q, VALUES, (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Empresa cadastrada com sucesso",data});
    })
})


app.get("/empresa/:id", (req, res) => {
    const q = "SELECT * FROM user WHERE id = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        atualizarContadores();
        if (data.length === 0) return res.status(404).json({ message: "Usuário não encontrado" });
        return res.json(data[0]);
    });
});
app.put("/empresaupdate/:id", (req,res)=>{
    console.log("Dados recebidos:", req.body);
    const VALUES = [
        req.body.nome,
        req.body.descricao,
        req.body.admin_id,
    ];
    const id = req.params.id;
    const q = "UPDATE empresa  SET nome = ?, descricao = ?, admin_id = ? WHERE id = ?";

    db.query(q, [...VALUES,id], (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Usuário cadastrado com sucesso",data});
    })
})

app.delete("/empresa/:id", (req,res)=>{
    const id = req.params.id;
    const q = "DELETE FROM user WHERE id = ?";

    db.query(q, [id], (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Usuário Eliminado com sucesso",data});
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


app.get("/user",  (req,res)=>{
    const q = "SELECT * FROM user;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)

             atualizarContadores();

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
        req.body.id,
    ];
    const q = "INSERT INTO user (nome, email, senha , telefone, id)  VALUES(?,?,?,?,?)";

    db.query(q, VALUES, (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        atualizarContadores();
        return res.status(201).json({message: "Usuário cadastrado com sucesso",data});
    })
})
app.get("/user/:id", (req, res) => {
    const q = "SELECT * FROM user WHERE id = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        atualizarContadores();
        if (data.length === 0) return res.status(404).json({ message: "Usuário não encontrado" });
        return res.json(data[0]);
    });
});
app.put("/userupdate/:id", (req,res)=>{
    console.log("Dados recebidos:", req.body);
    const VALUES = [
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.telefone,
    ];
    const id = req.params.id;
    const q = "UPDATE user  SET nome = ?, email = ?, senha = ?, telefone = ? WHERE id = ?";

    db.query(q, [...VALUES,id], (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Usuário cadastrado com sucesso",data});
    })
})

app.delete("/user/:id", (req,res)=>{
    const id = req.params.id;
    const q = "DELETE FROM user WHERE id = ?";

    db.query(q, [id], (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Usuário Eliminado com sucesso",data});
    })
})



// Endpoint para listar todas as datas
app.get("/data", (req, res) => {
    const q = "SELECT * FROM data;";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

// Endpoint para criar uma nova data
app.post("/data", (req, res) => {
    console.log("Dados recebidos:", req.body);
    const VALUES = [
        req.body.dia,
        req.body.mes,
        req.body.ano,
    ];
    const q = "INSERT INTO data (dia, mes, ano) VALUES (?, ?, ?)";

    db.query(q, VALUES, (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(201).json({ message: "Data cadastrada com sucesso", data });
    });
});


app.get("/contadores", (req, res) => {
    res.json({ total_users: users_cont, total_empresas: empresas_cont, total_agencias: agencias_cont }); 
});


app.get("/provincia",  (req,res)=>{
    const q = "SELECT * FROM provincia;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})
app.get("/municipio",  (req,res)=>{
    const q = "SELECT * FROM municipio;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.post("/login", (req, res) => {
    const { email, senha } = req.body;
  
    if (!email || !senha) {
      return res.status(400).json({ message: "Email e senha são obrigatórios" });
    }
  
    // Verificar se é admin
    const adminQuery = "SELECT * FROM admin WHERE email = ? AND senha = ?";
    db.query(adminQuery, [email, senha], (err, adminResult) => {
      if (err) return res.status(500).json({ message: "Erro no servidor" });
  
      if (adminResult.length > 0) {
        const admin = adminResult[0];
        const token = jwt.sign(
          { id: admin.id, email: admin.email, tipo: "admin" },
          "kuendaSegredo123",
          { expiresIn: "2h" }
        );
  
        return res.json({
          message: "Login de administrador bem-sucedido",
          token,
          user: {
            id: admin.id,
            nome: admin.nome,
            email: admin.email,
            tipo: "admin"
          }
        });
      }
  
      // Se não for admin, tenta como usuário normal
      const userQuery = "SELECT * FROM user WHERE email = ? AND senha = ?";
      db.query(userQuery, [email, senha], (err, userResult) => {
        if (err) return res.status(500).json({ message: "Erro no servidor" });
  
        if (userResult.length === 0) {
          return res.status(401).json({ message: "Credenciais inválidas" });
        }
  
        const user = userResult[0];
        const token = jwt.sign(
          { id: user.id, email: user.email, tipo: "usuario" },
          "kuendaSegredo123",
          { expiresIn: "2h" }
        );
  
        return res.json({
          message: "Login de usuário bem-sucedido",
          token,
          user: {
            id: user.id,
            nome: user.nome,
            email: user.email,
            tipo: "usuario"
          }
        });
      });
    });
  });
  app.get("/dashboard", autenticarToken, apenasAdmin, (req, res) => {
    res.json({ message: "Bem-vindo ao dashboard admin!" });
  });


app.listen(8800, ()=>{
console.log("Conectado no backend!1")
})

