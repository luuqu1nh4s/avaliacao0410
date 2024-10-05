import conn from './connection.js';

export async function inserirCanal(canal){
    const comando = `
        INSERT INTO db_ava1004.tb_canal(nm_canal, nr_canal, bt_aberto)
        VALUES (?, ?, ?)
    `

    let resposta = await conn.query (comando, [canal.nomeCanal, canal.numCanal, canal.eAberto]);

    let info = resposta[0];
    return info.insertId;
}

export async function consultarCanal(){
    const comando = `
        SELECT
            id_canal        idCanal,  
            nm_canal        nomeCanal,
            nr_canal        numCanal,
            bt_aberto       eAberto
        FROM db_ava1004.tb_canal
    `

    let resposta = await conn.query (comando);
    let info = resposta[0];
    return info;
}

export async function alterarCanal(id, canal){
    const comando = `
        UPDATE db_ava1004.tb_canal
            SET nm_canal = ?,               
                nr_canal = ?,              
                bt_aberto = ?      
        WHERE id_canal = ?
    `

    let resposta = await conn.query (comando, [canal.nomeCanal, canal.numCanal, canal.eAberto, id]);

    let info = resposta[0];
    return info.affectedRows;
}

export async function deletarCanal(id){
    const comando = `
        DELETE FROM db_ava1004.tb_canal
        WHERE id_canal = ?
    `

    let resposta = await conn.query (comando, [id]);
    let info = resposta[0];
    return info.affectedRows;
}