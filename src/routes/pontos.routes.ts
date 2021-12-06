import { Router } from "express";
import PontoController from "../controllers/PontoController"

const pontosRouter = Router();
const pontosController = new PontoController();

pontosRouter.get("/", pontosController.index);
pontosRouter.get("/:id", pontosController.show);
pontosRouter.post("/", pontosController.create);
pontosRouter.delete("/:id", pontosController.delete);


export default pontosRouter;