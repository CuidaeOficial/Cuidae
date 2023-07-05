create database if not exists Cuidae;
use Cuidae;

create table if not exists contratante(
    email varchar(40)  not null, 
    senha varchar(16) not null,
    celular varchar(15) not null CHECK (celular REGEXP '^[0-9]+$'),
    rg varchar(9) CHECK (rg REGEXP '^[0-9]+$'),
    cpf varchar(11) not null CHECK (cpf REGEXP '^[0-9]+$') primary key,
    data_nascimento varchar(8) not null CHECK (data_nascimento REGEXP '^[0-9]+$'),
    nacionalidade varchar(40) not null
    );

create table if not exists colaborador(
	email varchar(40)  not null, 
    senha varchar(16) not null,
    celular varchar(15) not null CHECK (celular REGEXP '^[0-9]+$'),
    rg varchar(9) CHECK (rg REGEXP '^[0-9]+$'),
    cpf varchar(11) not null CHECK (cpf REGEXP '^[0-9]+$') primary key,
    data_nascimento varchar(8) not null CHECK (data_nascimento REGEXP '^[0-9]+$'),
    nacionalidade varchar(40) not null,
    servico_prestado varchar(15)
    );
    
    create table if not exists endereco_colaborador(
	cpf_endereco_colaborador varchar(11),
	FOREIGN KEY (cpf_endereco_colaborador) REFERENCES colaborador(cpf),
	estado varchar(40) not null,
    cidade varchar(40) not null,
    bairro varchar(50) not null,
    cep varchar(8) not null,
    rua varchar(80) not null,
    numero varchar(9),
    complemento varchar(15)
);

create table if not exists endereco_contratante(
	cpf_endereco_contratante varchar(11),
	FOREIGN KEY (cpf_endereco_contratante) REFERENCES contratante(cpf),
	estado varchar(40) not null,
    cidade varchar(40) not null,
    bairro varchar(50) not null,
    cep varchar(8) not null,
    rua varchar(80) not null,
    numero varchar(9),
    complemento varchar(15)
);

create table if not exists avaliacoes(
	cpf_avaliador varchar(11),
    FOREIGN KEY (cpf_avaliador) REFERENCES contratante(cpf),
    descricao varchar(370),
    estrelas char(5),
    indica char(1)
-- indica - se o avaliador indica ou não
);

create table if not exists anuncio_perfil(
		cpf_anuncio varchar(11) CHECK (cpf_anuncio REGEXP '^[0-9]+$'),
		FOREIGN KEY (cpf_anuncio) REFERENCES colaborador(cpf),
		servico_prestado varchar(8) not null,
        data_inscricao varchar(8) not null CHECK (data_inscricao REGEXP '^[0-9]+$'),
        cidade varchar(40) not null,
        media_avaliacoes int not null,
        antecedentes_criminais char(1),
        referencias char(1),
        selo_cuidae char(1),
        descricao varchar(370) not null
    );
    
    create table if not exists cursos(
	cpf_curso varchar(11) CHECK (cpf_curso REGEXP '^[0-9]+$'),
	FOREIGN KEY (cpf_curso) REFERENCES colaborador(cpf),
	nome_curso varchar(30),
    duracao_horas double,
    data_conclusao varchar(8) not null CHECK (data_conclusao REGEXP '^[0-9]+$')
    );
    
    create table if not exists lista_de_tarefas(
	cpf_colab_tarefas varchar(11) CHECK (cpf_colab_tarefas REGEXP '^[0-9]+$'),
	cpf_contr_tarefas varchar(11) CHECK (cpf_contr_tarefas REGEXP '^[0-9]+$'),
	FOREIGN KEY (cpf_colab_tarefas) REFERENCES colaborador(cpf),
	FOREIGN KEY (cpf_contr_tarefas) REFERENCES contratante(cpf),
    tarefa varchar(30),
    ult_vez_executada varchar(40),
    prioridade varchar(12)
);