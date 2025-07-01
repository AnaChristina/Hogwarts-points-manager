import { Router } from "express";
import { AlunosController } from "../controllers/AlunosController";

const router = Router();
const alunoController = new AlunosController();

router.get('/', alunoController.listar);

export default router;