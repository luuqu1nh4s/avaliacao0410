import conn from './connection.js';

export async function inserirUsuario(usuario){
    const comando = `
        INSERT INTO db_ava1004.tb_usuario(nm_usuario)
        VALUES (?)
    `

    let resposta = await conn.query (comando, [usuario.nomeUsuario]);

    let info = resposta[0];
    return info.insertId;
}

export async function consultarUsuario(){
    const comando = `
        SELECT
            id_usuario        idUsuario,  
            nm_usuario        nomeUsuario
        FROM db_ava1004.tb_usuario
    `

    let resposta = await conn.query (comando);
    let info = resposta[0];
    return info;
}

export async function alterarUsuario(id, usuario){
    const comando = `
        UPDATE db_ava1004.tb_usuario
            SET nm_usuario = ?     
        WHERE id_usuario = ?
    `

    let resposta = await conn.query (comando, [usuario.nomeUsuario, id]);

    let info = resposta[0];
    return info.affectedRows;
}

export async function deletarUsuario(id){
    const comando = `
        DELETE FROM db_ava1004.tb_usuario
        WHERE id_usuario = ?
    `

    let resposta = await conn.query (comando, [id]);
    let info = resposta[0];
    return info.affectedRows;
}