import { Gastos } from "../entities/gastosEntites.js";
import { GastosRepository } from "../providers/repositores/gastosRepository.js";

export function serviceAdicionaGasto(titulo, valor) {
  if (typeof titulo !== "string" || titulo.trim().length === 0) {
    return {
      success: false,
      error: "Título é obrigatório e deve ser um texto.",
    };
  }

  const tituloNormalizado = titulo.trim();
  if (tituloNormalizado.length > 120) {
    return {
      success: false,
      error: "Título deve ter no máximo 120 caracteres.",
    };
  }

  if (valor.toString().length > 8) {
    return {
      success: false,
      error: "O campo precisa ter no mínimo 8 dígitos.",
    };
  }

  if (typeof valor !== "number" || !Number.isFinite(valor)) {
    return {
      success: false,
      error: "Valor deve ser um número válido.",
    };
  }

  const novoGasto = new Gastos(tituloNormalizado, valor);
  const gastoRepository = new GastosRepository();

  const resultado = gastoRepository.create(novoGasto);
  if (!resultado) {
    return { success: false, error: "Erro ao adicionar gasto." };
  }
  return { success: true, data: resultado };
}
