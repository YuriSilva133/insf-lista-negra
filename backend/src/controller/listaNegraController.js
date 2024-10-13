import * as db from '../repository/listaNegraRepository.js';

import { Router } from "express";
const endpoints = Router();

// Consultar pessoa da lista Negra
endpoints.get('/listaNegra/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let registros = await db.consultarListaNegraPorId(id);
        
        resp.send(registros[0]);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// Consultar pessoa da lista Negra (query)
endpoints.get('/listaNegra', async (req, resp) => {
    try {
        const {idUsuario} = req.query;

        let registros = await db.consultarListaNegra(idUsuario);
        
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// inserir pessoa na lista negra
endpoints.post('/listaNegra/', async (req, resp) => {
    try {
        //nome, motivo, vinganca, notaOdio, perdoado, idUsuario
        let pessoa = req.body

        let id = await db.inserirListaNegra(pessoa);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//atualizar um usuario da lista negra
endpoints.put('/listaNegra/:id', async (req, resp) => {
    try {
        let id = req.params.id

        //nome, motivo, vinganca, notaOdio, perdoado
        let pessoa = req.body;

        let linhasAfetadas = await db.alterarListaNegra(id, pessoa);
        
        if (linhasAfetadas >= 1) {
            resp.send({
                LinhasAlteradas: linhasAfetadas
            });
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//remover um registro
endpoints.delete('/listaNegra/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerListaNegra(id);
        if (linhasAfetadas >= 1) {
            resp.send({
                LinhasRemovidas: linhasAfetadas
            });
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;