import { Router } from "express";
import clientesRoutes from "./routes/clientes.routes";
import enderecosRoutes from "./routes/enderecos.routes";
import pontosRoutes from "./routes/pontos.routes";
import contratosRoutes from "./routes/contratos.routes";
import eventosRouter from "./routes/contratoEventos.routes";

const router = Router();

router.use("/api/v1/clientes", clientesRoutes);
router.use("/api/v1/enderecos", enderecosRoutes);
router.use("/api/v1/pontos", pontosRoutes);
router.use("/api/v1/contratos", contratosRoutes);
router.use("/api/v1/historico", eventosRouter)


export default router