import './index.scss';
import { useState } from "react";
import axios from 'axios';

export default function ProgramasFavoritos(){
    const[idUser, setIdUser] = useState ('');
    const[idCp, setIdCp] = useState ('');
    const[notaAva, setNotaAva] = useState ('');
    const[listaPF, setListaPF] = useState ([]);

    async function salvarPF(){
        const paramcorpo = {
            "idUsuario": idUser,
            "idCanalPrograma": idCp,
            "notaAvaliacao": notaAva
        }
        const url = 'http://localhost:1004/progfav';
        let resp = await axios.post(url, paramcorpo);
        alert (`Programa Favorito de id ${resp.data.novoId} adicionado.`)
    }

    async function buscarPF(){
        const url = 'http://localhost:1004/progfav';
        let resp = await axios.get(url);
        setListaPF(resp.data)
    }

    return(
        <div className="pagina-programas-favoritos">
            <div className="secaomae">
                <div className="secaocadastro">
                    <h1>Cadastrar Programa Favorito</h1>

                    <div className="infospf">
                        <div>
                            <h3>ID do Usuário:</h3>
                            <input type='text' value={idUser} onChange={e => setIdUser(e.target.value)}/>
                        </div>
                        <div>
                            <h3>ID do Canal-Programa:</h3>
                            <input type='text' value={idCp} onChange={e => setIdCp(e.target.value)}/>
                        </div>
                        <div>
                            <h3>Nota de Avaliação:</h3>
                            <input type='text' value={notaAva} onChange={e => setNotaAva(e.target.value)}/>
                        </div>
                    </div>

                    <button onClick={salvarPF}>SALVAR PROGRAMA FAVORITO</button>
                </div>

                <div className="secaobusca">
                    <div className="buscar">
                        <h1>Buscar Programas Favoritos</h1>
                        <button onClick={buscarPF}>BUSCAR PROGRAMAS FAVORITOS</button>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>ID do Usuário</th>
                                <th>ID do Canal-Programa</th>
                                <th>Nota de Avaliação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaPF.map(item =>
                                <tr>
                                    <td>{item.idUsuario}</td>
                                    <td>{item.idCanalPrograma}</td>
                                    <td>{item.notaAvaliacao}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}