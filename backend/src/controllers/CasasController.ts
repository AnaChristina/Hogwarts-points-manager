import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export class CasasController {
    async listar(req: Request, res: Response) {
        try 
        {
            const casas = await prisma.casa.findMany(); // busca no banco
            res.status(200).json(casas);
        } 
        
        catch (error)
        {
            console.error(error);
            res.status(500).json({ erro: 'Erro ao listar casa' });
        }
    }
}
