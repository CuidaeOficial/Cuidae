const express = require("express");
const router = express.Router();
const app = express();

const mongoose = require('mongoose');

// front end --> netlify
// back end --> render

// Esconder coisas sensiveis
require('dotenv').config();

// Permite requisições de diferentes domínios na web
const cors = require('cors');

const LoginColaborador = require('./LoginColaborador.js');
const LoginContratante = require('./LoginContratante.js');

const CriarContratante = require('./routes/CriarContratante.js');
const CriarColaborador = require('./routes/CriarColaborador.js');

app.use(express.json());

const connectionString = process.env.database_url;

mongoose.connect(connectionString)
    .then(() => {
        console.log('connected'); 

        app.use(cors());
        
        // DEFININDO AS ROTAS
        app.use('/CriarContratante', CriarContratante);
        app.use('/LoginContratante', LoginContratante);
        app.use('/CriarColaborador', CriarColaborador);
        app.use('/LoginColaborador', LoginColaborador);

        // A porta em que a API está escutando: localhost:3001
        app.listen(3001, () => {
            console.log("Backend running on 3001");
        })

    })
    .catch(err => console.error(err))