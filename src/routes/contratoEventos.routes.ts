import { Router } from "express";
import EventoController from "../controllers/EventoContratoController"

const eventosRouter = Router();
const eventosController = new EventoController();

eventosRouter.get("/:id", eventosController.show);


export default eventosRouter;