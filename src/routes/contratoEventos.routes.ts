import { Router } from "express";
import EventoController from "../controllers/EventoContratoController"
//rotas eventos
const eventosRouter = Router();
const eventosController = new EventoController();

eventosRouter.get("/:contrato_id/historico", eventosController.show);
export default eventosRouter;