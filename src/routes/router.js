import { controllerAdicionaGasto } from "../controllers/controllerAdicionaGasto.js";
import { controllerDeletaGasto } from "../controllers/controllerDeletaGasto.js";
import { controllerExibeGastos } from "../controllers/controllerExibeGastos.js";
import Router from "express";

const router = Router();

router.post("/merreis", controllerAdicionaGasto);
router.delete("/merreis/:id", controllerDeletaGasto);
router.get("/merreis", controllerExibeGastos);

export { router };
