import { Router } from "express";
import ContratoController from "../controllers/ContratoController"

const contratosRouter = Router();
const contratosController = new ContratoController();

contratosRouter.get("/", contratosController.index);
contratosRouter.get("/:id", contratosController.show);
contratosRouter.post("/", contratosController.create);
contratosRouter.delete("/:id", contratosController.delete);

export default contratosRouter;