export function middlewareAtualizaGasto(req, res, next) {
  const { id } = req.params;
  const { titulo, valor } = req.body;

  if (!id) {
    return res.status(400).json({ error: "ID inválido ou ausente." });
  }
  if (!titulo && !valor) {
    return res
      .status(400)
      .json({ error: "Pelo menos um campo deve estar preenchido." });
  }
  next();
}
