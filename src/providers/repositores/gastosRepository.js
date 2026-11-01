import { dbGastos } from "../database/dtBaseInMemory.js";

export class GastosRepository {
  allGastos() {
    return dbGastos;
  }

  findById(id) {
    const gasto = dbGastos.find((g) => g.id === id);

    if (!gasto) {
      return null;
    }

    return gasto;
  }

  findIndexById(id) {
    const index = dbGastos.findIndex((g) => g.id === id);
    return index !== -1 ? index : null;
  }

  create(gasto) {
    dbGastos.push(gasto);
    return gasto;
  }

  update(gasto) {
    const i = findIndexById(gasto.id);
    return dbGastos.splice(i, 1, gasto);
  }

  delete(id) {
    const index = dbGastos.findIndex((g) => g.id === id);

    if (index === -1) {
      return null;
    }

    dbGastos.splice(index, 1);
  }
}
