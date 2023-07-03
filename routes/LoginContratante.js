const express = require('express');
const router = express.Router();
const ContratanteModel = require('../models/ContratanteModel');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    try {
        const {email, senha} = req.body;

        const user = await ContratanteModel.find({email : email});
        
        if(!user[0]) {
            return res.status(404).json({message: "As credenciais do contratante estão incorretas"});

        } else {
            if(user[0].senha != senha) {
                return res.status(400).json({message: "As credenciais do contratante estão incorretas"});

            } else {
                let token = jwt.sign({email}, process.env.chave_secreta_token, {expiresIn: '1h'});

                res.status(200).json({message: "Usuário logado!", token});
            }
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;

// duas tabelas 
// login a gente precisa saber qual tabela vai checar se o usuário existe

// postman para testar as rotas da API