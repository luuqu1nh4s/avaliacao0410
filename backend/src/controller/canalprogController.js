import * as db from '../repository/canalprogRepository.js';
import { Router } from 'express';
const endpoints = Router();

endpoints.get('/canalprog/', async(req, resp) => {
    try{
        let registros = await db.consultarCanalProg();
        resp.send (registros);
    } 
    catch(err){
        resp.status(400).send({erro: err.message})
    }
});

endpoints.post('/canalprog/', async(req, resp) => {
    try{
        let canalprog = req.body;
        let id = await db.inserirCanalProg(canalprog);
        resp.send({novoId: id});
    }
    catch(err){
        resp.status(400).send({erro: err.message})
    }
})

endpoints.put('/canalprog/:id', async(req, resp) => {
    try{
        let id = req.params.id
        let canalprog = req.body;
        let linhasAfetadas = await db.alterarCanalProg(id, canalprog);

        if (linhasAfetadas >= 1){
            resp.send();
        }
        else{
            resp.status(400).send({erro: 'Nenhum registro encontrado.'})
        }
    }
    catch(err){
        resp.status(400).send({erro: err.message})
    }
});

endpoints.delete('/canalprog/:id', async(req, resp) => {
    try{
        let id = req.params.id
        let linhasAfetadas = await db.deletarCanalProg(id);

        if (linhasAfetadas >= 1){
            resp.send();
        }
        else{
            resp.status(400).send({erro: 'Nenhum registro encontrado.'})
        }
    }
    catch(err){
        resp.status( 400 ).send({erro: err.message})
    }
});

export default endpoints;