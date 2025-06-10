import jwt from 'jsonwebtoken';

// Middleware para autenticar qualquer usuário (logado)
export function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  jwt.verify(token, "kuendaSegredo123", (err, user) => {
    if (err) return res.status(403).json({ message: "Token inválido" });

    req.user = user; // injeta os dados do token na requisição
    next();
  });
}

// Middleware para permitir apenas admins
export function apenasAdmin(req, res, next) {
  if (req.user.tipo !== "admin") {
    return res.status(403).json({ message: "Acesso negado: apenas admins" });
  }
  next();
}
export function apenasEmpresa(req, res, next) {
  if (req.user.tipo !== "empresa") {
    return res.status(403).json({ message: "Acesso negado para este tipo de usuário" });
  }
  next();
}