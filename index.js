const express = require("express");  
const app = express();  
require('dotenv').config(); 
app.use(express.json());  

const conn = require("./model/conn/index"); 

conn();

app.get('/', (req,res) => {
    res.status(200).json({message:"Sistema Escolar"});
});

const alunoRouters = require("./routers/alunos");
app.use('/aluno',alunosRouters);

const professorRouters = require("./routers/professores");
app.use('/professor',professoresRouters);

const responsavelRouters = require("./routers/responsaveis");
app.use('/responsavel',responsaveisRouters);

const livroRouters = require("./routers/livros");
app.use('/livro',livrosRouters);

const disciplinaRouters = require("./routers/disciplinas");
app.use('/disciplina',disciplinasRouters);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});