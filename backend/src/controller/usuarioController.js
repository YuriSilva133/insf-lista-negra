import * as db from '../repository/usuarioRepository.js'

import {Router} from 'express'
const endpoints = Router()

// Cadastrar
endpoints.post('/cadastrar', async (req, resp) => {
    try {
        // nome, senha
        let pessoa = req.body

        let id = await db.inserirUsuario(pessoa)

        resp.send({
            NovoId: id
        })

    } catch (err) {
        resp.send({
            error:err.mesage
        })
    }
})

// Login
endpoints.post('/entrar', async (req, resp) => {
    try {
        let usuario = req.body

        //nome
        //senha
        let dados = await db.validarUsuario(usuario)

        if (dados == null) {
            resp.send({
                mensagem: 'Usuario ou senha invalidos'
            })
        } else{
            resp.send(dados)
        }

    } catch (err) {
        resp.send({
            error:err.mesage
        })
    }
})

export default endpoints;