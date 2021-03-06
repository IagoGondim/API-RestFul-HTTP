import { Router } from "express";
import ContratoController from "../controllers/ContratoController"
//rotas contratos
const contratosRouter = Router();
const contratosController = new ContratoController();

contratosRouter.get("/", contratosController.index);
contratosRouter.get("/:id", contratosController.show);
contratosRouter.post("/", contratosController.create);
contratosRouter.delete("/:id", contratosController.delete);
contratosRouter.put("/:id", contratosController.update);

export default contratosRouter;