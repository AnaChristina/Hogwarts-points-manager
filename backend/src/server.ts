import  express, {Request, Response}  from "express";
import cors from 'cors';

//importando as routas 
import alunoRouter from './routes/aluno.routes';

const app = express();

//conf

app.use(cors()); //todos acessam
app.use(express.json()); 

//rotas
app.use('/alunos', alunoRouter);

//teste
app.get('/', (req: Request, res: Response)=>{
    res.send('servidor rodando!');
});

//rpdar servidor
app.listen(3000, ()  =>{
    console.log('servidor rodando em https://localhost:3000');
})
