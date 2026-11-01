import { serviceAtualizaGasto } from "../services/serviceAtualizaGasto.js";

export async function controllerAtualizaGasto(req, res) {
  const { id } = req.params;
  const { titulo, valor } = req.body;

  try {
    const gastoAtualizado = await serviceAtualizaGasto(id, { titulo, valor });
    res.json(gastoAtualizado);
  } catch (error) {
    res.status(404).json({ error: "Gasto não encontrado." });
  }
}
