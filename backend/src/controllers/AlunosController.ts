import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export class AlunosController {


    //minha funçao pra lustar todos os alunos do meu banco de dados.
    async listar(req: Request, res: Response) {
        try {
            const alunos = await prisma.aluno.findMany({
                include: {
                    casa: true
                }
            });
            res.status(200).json(alunos);

        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: 'Erro ao listar alunos' });
        }
    }



    //pesquisae alunos
    async buscaAluno(req: Request, res: Response) {
        const nomeBusca = String(req.query.nome || '');

        try {
            const alunos = await prisma.aluno.findMany({
                where: {
                    nome: {
                        contains: nomeBusca,
                        mode: 'insensitive',
                    },
                },
            });
            res.status(200).json(alunos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: 'erro ao buscar aluno' });
        }
    }

    async buscarPorId(req: Request, res: Response) {
        try {
            const id = (req.params.id);

            const aluno = await prisma.aluno.findUnique({
                where: { id },
                include: { casa: true }
            });

            if (!aluno) {
                return res.status(404).json({ erro: 'Aluno não encontrado' });
            }

            res.status(200).json(aluno);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: 'Erro ao buscar aluno' });
        }
    }




    //função para cadastrar aluno novo
    async cadastrar(req: Request, res: Response) {
        const { nome, sobrenome, casa_id, dataNascimento, slug } = req.body;
        try {
            const novoAluno = await prisma.aluno.create({
                data: {
                    nome,
                    sobrenome,
                    casa_id,
                    dataNascimento: new Date(dataNascimento),
                    slug,
                },
            });
            res.status(201).json(novoAluno);
        }

        catch (error) {
            console.error(error);
            res.status(500).json({ erro: 'Erro cadastrar aluno' });
        }
    }


    async adicionarPontos(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { pontos } = req.body;

        if (typeof pontos !== 'number' || pontos <= 0) {
            res.status(400).json({ error: 'Pontos inválidos' });
            return;
        }

        try {
            const aluno = await prisma.aluno.findUnique({
                where: { id },
                include: { casa: true },
            });

            if (!aluno) {
                res.status(404).json({ error: 'Aluno não encontrado' });
                return;
            }

            const alunoAtualizado = await prisma.aluno.update({
                where: { id },
                data: { pontos: (aluno.pontos || 0) + pontos },
            });

            if (aluno.casa_id) {
                await prisma.casa.update({
                    where: { id: aluno.casa_id },
                    data: { pontos: { increment: pontos } },
                });
            }

            res.status(200).json({ mensagem: `Adicionados ${pontos} pontos ao aluno ${aluno.nome} e sua casa.` });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao adicionar pontos' });
        }
    }


//remover pontos alunos e da casa também
    async removerPontos(req: Request, res: Response) {
        const { id } = req.params;
        const { pontos } = req.body;

        if (!pontos || isNaN(pontos)) {
            return res.status(400).json({ mensagem: 'Pontos inválidos.' });
        }

        try {
            const aluno = await prisma.aluno.findUnique({
                where: { id },
                include: { casa: true },
            });

            if (!aluno) {
                return res.status(404).json({ mensagem: 'Aluno não encontrado.' });
            }

            const novosPontos = (aluno.pontos ?? 0) - pontos;

            await prisma.aluno.update({
                where: {id},
                data: { pontos: novosPontos < 0 ? 0 : novosPontos },
            });

            return res.json({ mensagem: 'Pontos removidos com sucesso!' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ mensagem: 'Erro ao remover pontos.' });
        }
    }
}