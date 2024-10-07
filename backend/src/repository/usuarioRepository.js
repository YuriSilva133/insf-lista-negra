import con from "./connection.js";

export async function inserirUsuario(usuario) {
    let comando = `
    insert into tb_usuario(nm_usuario, ds_senha) 
    values (?, ?)
    `

    let resposta = await con.query(comando, [usuario.nome, usuario.senha])
    let info = resposta[0]

    return info.insertId
}

export async function validarUsuario(usuario) {
    let comando = `
    select id_usuario id, nm_usuario nome
    from tb_usuario
    where nm_usuario = ? and ds_senha = ?
    `

    let registros = await con.query(comando, [usuario.nome, usuario.senha])

    return registros[0][0]
}