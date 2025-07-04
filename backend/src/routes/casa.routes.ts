import { Router } from "express";
import { CasasController } from "../controllers/CasasController";

const router = Router();
const casasController = new CasasController();

router.get('/', casasController.listar);

export default router;