// middlewareDeletaGasto.js
export function middlewareDeletaGasto(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "ID inválido ou ausente." });
  }

  next();
}
