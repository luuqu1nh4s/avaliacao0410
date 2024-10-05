import conn from './connection.js';

export async function inserirProgFav(progfav){
    const comando = `
        INSERT INTO db_ava1004.tb_programa_favorito(id_usuario, id_canal_programa, vl_avaliacao)
        VALUES (?, ?, ?)
    `

    let resposta = await conn.query (comando, [progfav.idUsuario, progfav.idCanalPrograma, progfav.notaAvaliacao]);

    let info = resposta[0];
    return info.insertId;
}

export async function consultarProgFav(){
    const comando = `
        SELECT
            id_programa_favorito                          idProgramaFav,
            tb_usuario.id_usuario                         idUsuario,
            tb_canal_programa.id_canal_programa           idCanalPrograma,
            vl_avaliacao                                  notaAvaliacao
        FROM db_ava1004.tb_programa_favorito

        INNER JOIN tb_usuario ON tb_programa_favorito.id_usuario = tb_usuario.id_usuario
        INNER JOIN tb_canal_programa ON tb_programa_favorito.id_canal_programa = tb_canal_programa.id_canal_programa
    `

    let resposta = await conn.query (comando);
    let info = resposta[0];
    return info;
}

export async function alterarProgFav(id, progfav){
    const comando = `
        UPDATE db_ava1004.tb_programa_favorito
            SET id_usuario = ?,               
                id_canal_programa = ?,              
                vl_avaliacao = ?      
        WHERE id_programa_favorito = ?
    `

    let resposta = await conn.query (comando, [progfav.idUsuario, progfav.idCanalPrograma, progfav.notaAvaliacao, id]);

    let info = resposta[0];
    return info.affectedRows;
}

export async function deletarProgFav(id){
    const comando = `
        DELETE FROM db_ava1004.tb_programa_favorito
        WHERE id_programa_favorito = ?
    `

    let resposta = await conn.query (comando, [id]);
    let info = resposta[0];
    return info.affectedRows;
}