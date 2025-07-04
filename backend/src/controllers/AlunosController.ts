import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export class AlunosController {
    async listar(req: Request, res: Response) {
        try {
            const alunos = await prisma.aluno.findMany(); // busca no banco
            res.status(200).json(alunos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: 'Erro ao listar alunos' });
        }
    }
}
