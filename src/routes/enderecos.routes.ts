import { Router } from "express";
import EnderecoController from "../controllers/EnderecoController"
//rotas Endereco
const enderecosRouter = Router();
const enderecosController = new EnderecoController();

enderecosRouter.get("/", enderecosController.index);
enderecosRouter.get("/:id", enderecosController.show);
enderecosRouter.post("/", enderecosController.create);
enderecosRouter.put("/:id", enderecosController.update);
enderecosRouter.delete("/:id", enderecosController.delete);

export default enderecosRouter;