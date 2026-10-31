import { randomUUID } from "crypto";

export class Gastos {
  constructor(titulo, valor, createdAT, updatedAT, id) {
    this._id = id ?? randomUUID();
    this._titulo = titulo;
    this._valor = valor;
    this._createdAt = createdAT ?? new Date();
    this._updatedAt = updatedAT ?? null;
  }

  get id() {
    return this._id;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(value) {
    this._titulo = value;
    this.touch();
  }

  get valor() {
    return this._valor;
  }

  set valor(value) {
    this._valor = value;
    this.touch();
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  toJSON() {
    return {
      id: this.id,
      titulo: this.titulo,
      valor: this.valor,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  touch() {
    return (this._updatedAt = new Date());
  }
}
