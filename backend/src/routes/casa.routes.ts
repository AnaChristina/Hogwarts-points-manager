import { Router } from "express";
import { CasasController } from "../controllers/CasasController";

const router = Router();
const casasController = new CasasController();

router.get('/', (req, res) => casasController.listar(req, res));
router.get('/:id', CasasController.buscarPorId);
export default router;
