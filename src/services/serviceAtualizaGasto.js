import { GastosRepository } from "../providers/repositores/gastosRepository.js";

export async function serviceAtualizaGasto(id, titulo, valor) {
  if (!id) {
    return { success: false, error: "ID inválido ou ausente." };
  }

  if (!titulo && !valor) {
    return {
      success: false,
      error: "pelo menos um campo deve estar preenchido.",
    };
  }

  try {
    const newGasto = { id, titulo, valor };
    const repository = new GastosRepository();
    const gastoAtualizado = await repository.update(newGasto);

    if (!gastoAtualizado) {
      return { success: false, error: "Gasto não encontrado." };
    }

    return { success: true, data: gastoAtualizado };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
