import { serviceAdicionaGasto } from "../services/serviceAdicionaGasto.js";

export function controllerAdicionaGasto(req, res) {
  const { titulo, valor } = req.body ?? {};

  const resultado = serviceAdicionaGasto(titulo, valor);

  if (resultado.success === false) {
    return res.status(400).json({ error: resultado.error });
  }
  res.status(201).json({
    message: "Gasto adicionado com sucesso.",
    resultado: resultado.data,
  });
}
