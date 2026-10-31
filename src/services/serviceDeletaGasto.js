import { GastosRepository } from "./../providers/repositores/gastosRepository.js";

export async function serviceDeletaGasto(id) {
  if (!id) {
    return { success: false, error: "ID do gasto é obrigatório." };
  }
  try {
    const repository = new GastosRepository();
    const result = repository.delete(id);
    if (!result) {
      return { success: false, error: "Gasto não encontrado." };
    }
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: "Erro ao deletar gasto." };
  }
}
