import { serviceExibeGastos } from "../services/serviceExibeGastos.js";

export async function controllerExibeGastos(req, res) {
  const resultado = await serviceExibeGastos();

  if (resultado.success === false) {
    return res.status(400).json({ error: resultado.error });
  }

  res.status(200).json({
    message: "Gastos exibidos com sucesso.",
    resultado: resultado.data,
  });
}
