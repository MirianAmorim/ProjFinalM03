# Projeto Final M03-BackEnd

<div>
    <img align="right" alt="Rafa-yoda" height="120" width="200" src="https://developers.giphy.com/branch/master/static/api-512d36c09662682717108a38bbb5c57d.gif">
</div>
Projeto final do módulo 03 utilizando o padrão MVC e integração entre back e front.

API criada com node, express e mongoDB.

contém 5 rotas com as seguintes propriedades:

Alunos:

    nome: { type: String, required: true},
    idade: { type: Number, required: true},    
    turma: { type: String, required: true},
    niver: { type: String, required: false},
    responsavel : { type: String, required: false}.

Disciplinas:

    nome: { type: String, required: true},
    professor: { type: String, required: true},
    turma: { type: String, required: true}.

Livros:

    titulo: { type: String, required: true},
    edicao: { type: Number, required: true},
    ano: { type: Number, required: true},
    autor : { type: String, required: true},
    disciplina: { type: String, required: true}.

Professores:

    nome: { type: String, required: true},
    turma: { type: String, required: true},
    disciplina: { type: String, required: true}.
    
Responsaveis:

    nome: { type: String, required: true},
    aluno: { type: String, required: true}.

# Cada rota contem as opções criar, listar todos, listar por id, editar por id e deletar por id.
As rotas criar e editar aguardam o preenchimento completo de cada um dos campos retornando mensagens de erro, caso algum campo deixe de ser preenchido.

Tabela das rotas:

Alunos:

    /aluno/listall
    /aluno/listid/id
    /aluno/update/id
    /aluno/delete/id

Disciplinas:

    /disciplina/add
    /disciplina/listall
    /disciplina/listid/id
    /disciplina/update/id
    /disciplina/delete/id


Livros:

    /livro/add
    /livro/listall
    /livro/listid/id
    /livro/update/id
    /livro/delete/id
    
Professores:
    
    /professor/add
    /professor/listall
    /professor/listid/id
    /professor/update/id
    /professor/delete/id
    
Responsaveis:

    /responsavel/add
    /responsavel/listall
    /responsavel/listid/id
    /responsavel/update/id
    /responsavel/delete/id
    
    
# O projeto contem uma collection para ser utilizada na extensão thunder client para realizar testes de conexão em todas as rotas.

# O projeto esta rodando com o mongoDB, siga o env.bkp para utilizar o dotenv caso queira, basta seguir o conteudo do arquivo para realizar a conexão com o DB.
