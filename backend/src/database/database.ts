import { Client } from 'pg';

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'meubanco',
    password: 'minhasenha',
    port: 5432,
});

client.connect()
    .then(()=> console.log('Conectado ao PostgreSQL!'))
    .catch(err => console.error('Erro de conexão:', err)); 