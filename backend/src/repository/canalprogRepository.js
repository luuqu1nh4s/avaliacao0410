import conn from './connection.js';

export async function inserirCanalProg(canalprog){
    const comando = `
        INSERT INTO db_ava1004.tb_canal_programa(id_canal, nm_programa, ds_genero, hr_programa)
        VALUES (?, ?, ?, ?)
    `

    let resposta = await conn.query (comando, [canalprog.idCanal, canalprog.nomePrograma, canalprog.generoPrograma, canalprog.horaPrograma]);

    let info = resposta[0];
    return info.insertId;
}

export async function consultarCanalProg(){
    const comando = `
        SELECT
            id_canal_programa        idCanalPrograma,  
            tb_canal.id_canal        idCanal,
            nm_programa              nomePrograma,
            ds_genero                generoPrograma,
            hr_programa              horaPrograma
        FROM db_ava1004.tb_canal_programa

        INNER JOIN tb_canal ON tb_canal_programa.id_canal = tb_canal.id_canal
    `

    let resposta = await conn.query (comando);
    let info = resposta[0];
    return info;
}

export async function alterarCanalProg(id, canalprog){
    const comando = `
        UPDATE db_ava1004.tb_canal_programa
            SET id_canal = ?,               
                nm_programa = ?,              
                ds_genero = ?,
                hr_programa = ?   
        WHERE id_canal_programa = ?
    `

    let resposta = await conn.query (comando, [canalprog.idCanal, canalprog.nomePrograma, canalprog.generoPrograma, canalprog.horaPrograma, id]);

    let info = resposta[0];
    return info.affectedRows;
}

export async function deletarCanalProg(id){
    const comando = `
        DELETE FROM db_ava1004.tb_canal_programa
        WHERE id_canal_programa = ?
    `

    let resposta = await conn.query (comando, [id]);
    let info = resposta[0];
    return info.affectedRows;
}