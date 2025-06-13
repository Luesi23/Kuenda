import express from "express"
import mysql from "mysql2";
import cors from "cors";
import jwt from 'jsonwebtoken';
import { autenticarToken, apenasAdmin, apenasEmpresa } from './middlewares/auth.js';
import { permitirTipos } from './middlewares/auth.js';
import { apenasAtendente } from "./middlewares/auth.js";





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
        req.body.localizacao,
        parseInt(req.body.empresa_id),
        req.body.senha,
        req.body.email
    ];
    const q = " INSERT INTO agencia  (nome, localizacao, empresa_id, senha, email)  VALUES (?, ?, ?, ?, ?)";

    db.query(q, VALUES, (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Agencia cadastrada com sucesso",data});
    })
})

// Criar atendente (a agência deve estar autenticada)
app.post("/atendente", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "Token não fornecido" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, "kuendaSegredo123");

    if (decoded.tipo !== "agencia") {
      return res.status(403).json({ message: "Apenas agências podem cadastrar atendentes" });
    }

    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const q = `
      INSERT INTO atendente (nome, email, senha, agencia_id)
      VALUES (?, ?, ?, ?)
    `;

    db.query(q, [nome, email, senha, decoded.id], (err, result) => {
      if (err) {
        console.error("Erro ao cadastrar atendente:", err);
        return res.status(500).json({ message: "Erro ao cadastrar atendente" });
      }
      res.status(201).json({ message: "Atendente cadastrado com sucesso", id: result.insertId });
    });

  } catch (err) {
    console.error("Token inválido:", err);
    return res.status(401).json({ message: "Token inválido" });
  }
});



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
    const q = `
    SELECT 
      municipio.id, 
      municipio.nome AS municipio, 
      provincia.nome AS provincia
    FROM municipio
    JOIN provincia ON municipio.id_provincia = provincia.id
    ORDER BY provincia.nome, municipio.nome;
  `
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.get("/rota", (req, res) => {
  const q = `
    SELECT 
      r.id,
      m1.nome AS municipio_origem,
      p1.nome AS provincia_origem,
      m2.nome AS municipio_destino,
      p2.nome AS provincia_destino
    FROM rota r
    JOIN municipio m1 ON r.id_origem = m1.id
    JOIN provincia p1 ON m1.id_provincia = p1.id
    JOIN municipio m2 ON r.id_destino = m2.id
    JOIN provincia p2 ON m2.id_provincia = p2.id
    ORDER BY r.id DESC;
  `;

  db.query(q, (err, data) => {
    if (err) {
      console.error("Erro ao buscar rotas:", err);
      return res.status(500).json({ error: "Erro ao buscar rotas" });
    }
    return res.json(data);
  });
});

app.delete("/rota/:id", (req,res)=>{
    const id = req.params.id;
    const q = "DELETE FROM rota WHERE id = ?";

    db.query(q, [id], (err, data) => {
        if(err){ return res.status(500).json(err);
        }
        return res.status(201).json({message: "Rota Eliminada com sucesso",data});
    })
})

app.post("/rota", (req, res) => {
  const { partida_id, destino_id } = req.body;

  if (!partida_id || !destino_id) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes" });
  }

  const q = "INSERT INTO rota (id_origem, id_destino) VALUES (?, ?)";
  db.query(q, [partida_id, destino_id], (err, result) => {
    if (err) {
      console.error("Erro ao inserir rota:", err);
      return res.status(500).json({ error: "Erro ao criar rota" });
    }
    return res.status(201).json({ message: "Rota criada com sucesso", id: result.insertId });
  });
});

app.get("/viagens", (req, res) => {
  const { partida, destino, data } = req.query;

  let q = `
    SELECT 
      v.id, m1.nome AS municipio_origem, p1.nome AS provincia_origem,
      m2.nome AS municipio_destino, p2.nome AS provincia_destino,
      v.distancia_km, v.duracao_prevista, v.data_partida, v.data_chegada, 
      v.preco, v.total_poltronas, v.status, e.nome AS empresa, e.logotipo_url, 
      a.nome AS agencia, a.localizacao
    FROM kd_base.viagens v
    JOIN kd_base.municipio m1 ON v.id_origem = m1.id
    JOIN kd_base.provincia p1 ON m1.id_provincia = p1.id
    JOIN kd_base.municipio m2 ON v.id_destino = m2.id
    JOIN kd_base.provincia p2 ON m2.id_provincia = p2.id
    JOIN kd_base.empresa e ON v.id_empresa = e.id
    JOIN kd_base.agencia a ON v.id_agencia = a.id
    WHERE 1=1
  `;

  const params = [];

  if (partida) {
    q += " AND LOWER(m1.nome) = ?";
    params.push(partida.toLowerCase());
  }
  if (destino) {
    q += " AND LOWER(m2.nome) = ?";
    params.push(destino.toLowerCase());
  }
  if (data) {
    q += " AND DATE(v.data_partida) = ?";
    params.push(data);
  }

  q += " ORDER BY v.id DESC";

  db.query(q, params, (err, data) => {
    if (err) {
      console.error("Erro ao buscar viagens:", err);
      return res.status(500).json({ error: "Erro ao buscar viagens" });
    }
    return res.json(data);
  });
});


app.get("/minhas-viagens/:userId", (req, res) => {
  const userId = req.params.userId;
  const q = `
    SELECT i.*, v.municipio_origem, v.municipio_destino, v.data_partida, v.preco
    FROM ingressos i
    JOIN viagens v ON i.id_viagem = v.id
    WHERE i.user_id = ?
    ORDER BY v.data_partida DESC
  `;
  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json({ message: "Erro interno" });
    res.json(data);
  });
});



app.get("/ingresso/referencia/:ref", autenticarToken, apenasAtendente, (req, res) => {
  const ref = req.params.ref;
  const atendenteId = req.user.id;

  db.query("SELECT agencia_id FROM atendente WHERE id = ?", [atendenteId], (err, resultAgencia) => {
    if (err) {
      console.error("Erro ao buscar agência do atendente:", err);
      return res.status(500).json({ message: "Erro interno" });
    }

    if (resultAgencia.length === 0) {
      return res.status(403).json({ message: "Atendente não encontrado" });
    }

    const agenciaId = resultAgencia[0].agencia_id;
    console.log("🧾 Agência do atendente:", agenciaId);

    const q = `
      SELECT 
        i.*,
        m1.nome AS municipio_origem,
        m2.nome AS municipio_destino,
        v.data_partida
      FROM ingressos i
      JOIN viagens v ON i.id_viagem = v.id
      JOIN municipio m1 ON v.id_origem = m1.id
      JOIN municipio m2 ON v.id_destino = m2.id
      WHERE i.referencia = ? AND v.id_agencia = ?
    `;

    db.query(q, [ref, agenciaId], (err, data) => {
      if (err) {
        console.error("Erro ao buscar ingresso:", err);
        return res.status(500).json({ message: "Erro interno" });
      }

      if (data.length === 0) {
        return res.status(404).json({ message: "Ingresso não encontrado ou não pertence à sua agência" });
      }

      res.json(data);
    });
  });
});






app.post("/ingressos", autenticarToken, (req, res) => {
  const {
    id_viagem,
    numero_assento,
    nome_passageiro,
    documento_identidade,
    telefone
  } = req.body;

  const userId = req.user.id;
  const referencia = `INGR-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  const q = `
    INSERT INTO ingressos
    (id_viagem, numero_assento, nome_passageiro, documento_identidade, telefone, user_id, referencia)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    q,
    [id_viagem, numero_assento, nome_passageiro, documento_identidade, telefone, userId, referencia],
    (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).json({ message: "Assento já está reservado." });
        }
        return res.status(500).json({ message: "Erro ao registrar ingresso." });
      }

      return res.status(201).json({ message: "Reserva criada", id: result.insertId, referencia });
    }
  );
});





// Endpoint para listar todas as viagens


app.post("/viagens", autenticarToken, (req, res) => {
  // Verificar se quem está a criar é uma agência
  if (req.user.tipo !== "agencia") {
    return res.status(403).json({ message: "Apenas agências podem criar viagens" });
  }

  const id_agencia = req.user.id;

  // Buscar o id_empresa vinculado à agência
  const buscaEmpresa = "SELECT empresa_id FROM agencia WHERE id = ?";

  db.query(buscaEmpresa, [id_agencia], (err, result) => {
    if (err || result.length === 0) {
      return res.status(500).json({ message: "Erro ao buscar empresa da agência" });
    }

    const id_empresa = result[0].empresa_id;

    // Coletar dados do corpo da requisição
    const {
      id_origem,
      id_destino,
      distancia_km,
      duracao_prevista,
      data_partida,
      data_chegada,
      preco,
      total_poltronas,
      status
    } = req.body;

    const q = `
      INSERT INTO viagens 
      (id_origem, id_destino, distancia_km, duracao_prevista, data_partida, data_chegada, preco, total_poltronas, status, id_agencia, id_empresa)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const valores = [
      id_origem,
      id_destino,
      distancia_km,
      duracao_prevista,
      data_partida,
      data_chegada,
      preco,
      total_poltronas,
      status || "disponível",
      id_agencia,
      id_empresa
    ];

    db.query(q, valores, (err, data) => {
      if (err) {
        console.error("Erro ao criar viagem:", err);
        return res.status(500).json({ message: "Erro ao criar viagem" });
      }

      return res.status(201).json({ message: "Viagem criada com sucesso", viagem_id: data.insertId });
    });
  });
});


app.post("/login", (req, res) => {
    const { email, senha } = req.body;
  
    if (!email || !senha) {
      return res.status(400).json({ message: "Email e senha são obrigatórios" });
    }
  
    const tipos = [
    { tabela: "admin", tipo: "admin" },
    { tabela: "user", tipo: "usuario" },
    { tabela: "empresa", tipo: "empresa" },
    { tabela: "agencia", tipo: "agencia" },
    { tabela: "atendente", tipo: "atendente" }
  ];

    // Verificar se é admin
    const adminQuery = "SELECT * FROM admin WHERE email = ? AND senha = ?";
    db.query(adminQuery, [email, senha], (err, adminResult) => {
      if (err) return res.status(500).json({ message: "Erro no servidor" });
  
      if (adminResult.length > 0) {
        const admin = adminResult[0];
        const token = jwt.sign(
          { id: admin.id, email: admin.email, tipo: "admin" },
          "kuendaSegredo123",
          { expiresIn: "24h" }
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
     const tentarLogin = (index) => {
    if (index >= tipos.length) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const { tabela, tipo } = tipos[index];
    const query = `SELECT * FROM ${tabela} WHERE email = ? AND senha = ?`;

    db.query(query, [email, senha], (err, result) => {
      if (err) return res.status(500).json({ message: "Erro no servidor" });

      if (result.length > 0) {
        const usuario = result[0];
        const token = jwt.sign(
          { id: usuario.id, email: usuario.email, tipo },
          "kuendaSegredo123",
          { expiresIn: "2h" }
        );

        return res.json({
          message: `Login de ${tipo} bem-sucedido`,
          token,
          user: {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            tipo
          }
        });
      } else {
        // Tenta o próximo tipo
        tentarLogin(index + 1);
      }
    });
  };

  tentarLogin(0);
});
});

app.get("/ConsultarIngresso", autenticarToken, apenasAtendente, (req, res) => {
  res.json({ message: "Acesso liberado apenas para atendentes", atendente: req.user });
});

  app.get("/dashboard", autenticarToken, permitirTipos("admin", "empresa", "agencia"), (req, res) => {
  res.json({ message: `Bem-vindo ao dashboard, ${req.user.tipo}!` });
});

 
  

app.listen(8800, ()=>{
console.log("Conectado no backend!1")
})

