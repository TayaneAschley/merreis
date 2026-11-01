export function middlewareAdicionaGasto(req, res, next) {
  const { titulo, valor } = req.body;

  if (!titulo || !valor) {
    return res.status(400).json({ error: "Título e valor são obrigatórios." });
  }
  next();
}
