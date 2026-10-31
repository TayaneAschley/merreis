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

  create(gasto) {
    dbGastos.push(gasto);
    return gasto;
  }

  update(gasto) {
    const indexGasto = dbGastos.findIndex((g) => g.id === gasto.id);

    if (!gasto) {
      return null;
    }

    dbGastos[indexGasto] = gasto;
  }

  delete(id) {
    const index = dbGastos.findIndex((g) => g.id === id);

    if (index === -1) {
      return null;
    }

    dbGastos.splice(index, 1);
  }
}
