-- criando as tabelas --

create table CASA(
    id serial primary key,
    nome varchar(50) not null, 
    descricao varchar(100), 
    pontos int default 0
);


create table  ALUNOS(
    id serial primary key, 
    nome varchar(50) not null, 
    casa_id int not null,
    pontos int default 0 
);

create table USUARIO(
    id serial primary key, 
    nome varchar(20) not null,
    email varchar(30) not null unique,
    senha varchar(100) not null
);

create table HISTORICO_PONTOS(
    id serial primary key,
    aluno_id int not null,
    usuario_id int not null,
    quantidade int not null, 
    motivo varchar(100) not null,
    data timestamp default current_timestamp, 

    constraint fk_aluno foreign key (aluno_id) references alunos(id),
    constraint fk_usuario foreign key (usuario_id) references usuario(id)
);