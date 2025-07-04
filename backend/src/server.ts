import  express, {Request, Response}  from "express";
import cors from 'cors';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


//importando as routas 
import alunoRouter from './routes/aluno.routes';
import casaRouter from './routes/casa.routes';


const app = express();

//conf

app.use(cors()); //todos acessam
app.use(express.json()); 

//rotas
app.use('/alunos', alunoRouter);
app.use('/casas', casaRouter);




app.get('/', (req: Request, res: Response)=>{
    res.send('servidor rodando!');
});


//rpdar servidor
app.listen(3000, ()  =>{
    console.log('servidor rodando em http://localhost:3000');
})
