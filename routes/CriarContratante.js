const express = require('express');
const router = express.Router();
const ContratanteModel = require('../models/ContratanteModel')

// Recebe a requisição na rota ("/CriarContratante") e faz a criação de usuário no DB.

router.post('/', async (req, res) => {
    try {

        // Na requisição do front end existe algo chamado BODY
        // No body virá coisas como email, senha...
        // BASIC HTTP, OK?
        let { email } = req.body;

        let userExist = await ContratanteModel.find({email: email});

        if(userExist.length !== 0) {
            res.status(500).json({message: "Usuário já existe!"});
        } else {
            await ContratanteModel.create(req.body);

            res.status(200).json({message: "Usuário criado com sucesso!"});
        }

    } catch (error) {
        res.status(500).json({message: "Usuário não pode ser criado"});
    }
})

module.exports = router;