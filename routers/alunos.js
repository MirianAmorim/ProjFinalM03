const express = require("express"); 
const router = express.Router(); 
const aluno = require("./../model/alunos"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"rota alunos ok"});
});

router.get('/listall', async (req,res) => {
    await pais.find({}).then((paises) => {
        console.log(paises);
        res.status(200).json(paises);
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.get('/listname/:nome', async (req,res) => {
    const nome = req.params.nome;
    await pais.find({ nome:nome }).then((pais) => { 
        console.log(pais);
        if(pais == null){ 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(pais);
        }
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { 

    //validando as entradas do usuario
    if(!req.body.nome){
        res.status(400).json({message: "esta faltando nome"});
        return;
    }else if(!req.body.populacao){
        res.status(400).json({message: "esta faltando populacao"});
        return;
    }
    else if(!req.body.linguaMae){
        res.status(400).json({message: "esta faltando linguaMae"});
        return; 
    }
    else if(!req.body.pib){
        res.status(400).json({message: "esta faltando pib"});
        return; 
    }

    await pais.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

router.put('/update/:id', async (req,res) => {
    const id = req.params.id;
    if(!req.body.nome){
        res.status(400).json({message: "esta faltando nome"});
        return;
    }else if(!req.body.populacao){
        res.status(400).json({message: "esta faltando populacao"});
        return;
    }
    else if(!req.body.linguaMae){
        res.status(400).json({message: "esta faltando linguaMae"});
        return; 
    }
    else if(!req.body.pib){
        res.status(400).json({message: "esta faltando pib"});
        return; 
    }

    await pais.updateOne({ _id:id},req.body).then(() => { 
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo esta errado"});
    });
});

router.delete('/delete/:id', async (req,res) => {
    if( req.params.id.length == 24){ 
        await pais.deleteOne({_id:req.params.id}).then(() => { 
            res.status(200).json({message: "Deletado com sucesso"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "algo esta errado"});
        });
    }else{
        res.status(400).json({message: "id precisa ter 24 caracteres"});
    }
});

module.exports = router;