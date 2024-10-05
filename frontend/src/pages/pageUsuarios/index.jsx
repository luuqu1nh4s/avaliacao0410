import './index.scss';
import { useState } from "react";
import axios from 'axios';

export default function Usuarios(){
    const[nomeUser, setNomeUser] = useState ('');
    const[listaUsers, setListaUsers] = useState ([]);

    async function salvarUser(){
        const paramcorpo = {
            "nomeUsuario": nomeUser
        }
        const url = 'http://localhost:1004/usuario';
        let resp = await axios.post(url, paramcorpo);
        alert (`Usuário de id ${resp.data.novoId} adicionado.`)
    }

    async function buscarUsers(){
        const url = 'http://localhost:1004/usuario';
        let resp = await axios.get(url);
        setListaUsers(resp.data)
    }

    return(
        <div className="pagina-usuarios">
            <div className="secaomae">
                <div className="secaocadastro">
                    <h1>Cadastrar Usuário</h1>

                    <div className="infosuser">
                        <div>
                            <h3>Nome do Usuário:</h3>
                            <input type='text' value={nomeUser} onChange={e => setNomeUser(e.target.value)}/>
                        </div>
                    </div>

                    <button onClick={salvarUser}>SALVAR USUÁRIO</button>
                </div>

                <div className="secaobusca">
                    <div className="buscar">
                        <h1>Buscar Usuários</h1>
                        <button onClick={buscarUsers}>BUSCAR USUÁRIOS</button>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>ID do Usuário</th>
                                <th>Nome do Usuário</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaUsers.map(item =>
                                <tr>
                                    <td>{item.idUsuario}</td>
                                    <td>{item.nomeUsuario}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}