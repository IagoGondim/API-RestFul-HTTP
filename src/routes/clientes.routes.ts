import { Router } from "express";
import ClienteController from "../controllers/ClienteController"

const clientesRouter = Router();
const clientesController = new ClienteController();

clientesRouter.get("/", clientesController.index);
clientesRouter.get("/:id", clientesController.show);
clientesRouter.post("/", clientesController.create);
clientesRouter.put("/:id", clientesController.update);
clientesRouter.delete("/:id", clientesController.delete);

export default clientesRouter;