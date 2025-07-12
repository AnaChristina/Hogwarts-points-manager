import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const cadastrar = async (req: Request, res: Response) => {
    const { email, senha, nome } = req.body

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10)
        const novoUsuario = await prisma.usuario.create({
            data: {
                email,
                senha: senhaCriptografada,
                nome
            }
        })

        return res.status(201).json({
            mensagem: 'Usuário criado com sucesso',
            usuario: {
                id: novoUsuario.id,
                email: novoUsuario.email
            }
        })
    } catch (erro) {
        return res.status(500).json({ mensagem: 'Erro no registro', erro })
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, senha } = req.body

    try {
        const usuario = await prisma.usuario.findUnique({ where: { email } })
        if (!usuario) {
            return res.status(401).json({ mensagem: 'email inválidas' })
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha)
        if (!senhaValida) {
            return res.status(401).json({ mensagem: 'senha inválida' })
        }

        const token = jwt.sign(
            { usuarioId: usuario.id },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        )

        return res.status(200).json({
            mensagem: 'Login bem-sucedido',
            token
        })
    } catch (erro) {
        return res.status(500).json({ mensagem: 'Erro no login', erro })
    }
}
