import { Router, Request, Response } from 'express';
import { AlunosController } from "../controllers/AlunosController";

const router = Router();
const alunoController = new AlunosController();

router.get('/', alunoController.listar);
router.post('/', alunoController.cadastrar);
router.get('/buscar', (req, res)=> alunoController.buscaAluno(req,res));
router.patch('/:id/adicionar-pontos', (req: Request, res: Response) => alunoController.adicionarPontos(req, res));
export default router;