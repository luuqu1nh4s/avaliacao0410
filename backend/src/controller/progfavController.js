import * as db from '../repository/progfavRepository.js';
import { Router } from 'express';
const endpoints = Router();

endpoints.get('/progfav/', async(req, resp) => {
    try{
        let registros = await db.consultarProgFav();
        resp.send (registros);
    } 
    catch(err){
        resp.status(400).send({erro: err.message})
    }
});

endpoints.post('/progfav/', async(req, resp) => {
    try{
        let progfav = req.body;
        let id = await db.inserirProgFav(progfav);
        resp.send({novoId: id});
    }
    catch(err){
        resp.status(400).send({erro: err.message})
    }
})

endpoints.put('/progfav/:id', async(req, resp) => {
    try{
        let id = req.params.id
        let progfav = req.body;
        let linhasAfetadas = await db.alterarProgFav(id, progfav);

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

endpoints.delete('/progfav/:id', async(req, resp) => {
    try{
        let id = req.params.id
        let linhasAfetadas = await db.deletarProgFav(id);

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