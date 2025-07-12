import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CasasController {
    static buscarPorId(arg0: string, buscarPorId: any) {
        throw new Error("Method not implemented.");
    }
    async listar(req: Request, res: Response) {
        const casas = await prisma.casa.findMany();
        res.json(casas);
    }

    async buscarPorId(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ erro: 'ID inválido' });
        }

        const casa = await prisma.casa.findUnique({
            where: { id },
        });

        if (!casa) {
            return res.status(404).json({ erro: 'Casa não encontrada' });
        }

        res.json(casa);
    }
}
