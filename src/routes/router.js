import { controllerAdicionaGasto } from "../controllers/controllerAdicionaGasto.js";
import { controllerDeletaGasto } from "../controllers/controllerDeletaGasto.js";
import { controllerExibeGastos } from "../controllers/controllerExibeGastos.js";
import { controllerAtualizaGasto } from "../controllers/controllerAtualizaGasto.js";

import { middlewareAtualizaGasto } from "../middlewares/atualizaGasto.js";
import { middlewareAdicionaGasto } from "../middlewares/adicionaGasto.js";
import { middlewareDeletaGasto } from "../middlewares/deletaGasto.js";

import Router from "express";
const router = Router();

router.post("/merreis", middlewareAdicionaGasto, controllerAdicionaGasto);
router.delete("/merreis/:id", middlewareDeletaGasto, controllerDeletaGasto);
router.get("/merreis", controllerExibeGastos);
router.put("/merreis/:id", middlewareAtualizaGasto, controllerAtualizaGasto);

export { router };
