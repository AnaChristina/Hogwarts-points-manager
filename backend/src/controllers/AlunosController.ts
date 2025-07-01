// controller: onde coloco a logica do que vai acontecer, por exemplo buscar ou adicionar alunos.

import { Request, Response } from 'express';

export class AlunosController{
    //lista todos os alunos

    async listar(req: Request, res: Response){
        try{
            res.status(200).json({mensagem: 'Lista de alunos'});
        }
        catch (error){
            res.status(500).json({erro: 'Erro ao listar alunos'})
        }
    }
}


    