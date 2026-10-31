import { serviceDeletaGasto } from "../services/serviceDeletaGasto.js";

export async function controllerDeletaGasto(req, res) {
  const { id } = req.params;
  try {
    const { success, error } = await serviceDeletaGasto(id);
    return res
      .status(200)
      .json({ message: "Gasto deletado com sucesso", success });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
