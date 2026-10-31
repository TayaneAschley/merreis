import { GastosRepository } from "../providers/repositores/gastosRepository.js";

export async function serviceExibeGastos() {
  try {
    const repository = new GastosRepository();
    const resultado = await repository.allGastos();
    if (resultado.length === 0) {
      return { success: true, message: "Nenhum gasto encontrado." };
    }
    return { success: true, data: resultado };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
