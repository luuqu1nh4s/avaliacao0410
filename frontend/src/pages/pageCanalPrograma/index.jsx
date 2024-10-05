import './index.scss';
import { useState } from "react";
import axios from 'axios';

export default function CanaisProgramas(){
    const[idCnl, setIdCnl] = useState ('');
    const[nome, setNome] = useState ('');
    const[genero, setGenero] = useState ('');
    const[hora, setHora] = useState ('');
    const[listaCP, setListaCP] = useState ([]);

    async function salvarCP(){
        const paramcorpo = {
            "idCanal": idCnl,
            "nomePrograma": nome,
            "generoPrograma": genero,
            "horaPrograma": hora 
        }
        const url = 'http://localhost:1004/canalprog';
        let resp = await axios.post(url, paramcorpo);
        alert (`Canal-Programa de id ${resp.data.novoId} adicionado.`)
    }

    async function buscarCP(){
        const url = 'http://localhost:1004/canalprog';
        let resp = await axios.get(url);
        setListaCP(resp.data)
    }

    return(
        <div className="pagina-canais-programas">
            <div className="secaomae">
                <div className="secaocadastro">
                    <h1>Cadastrar Canal-Programa</h1>

                    <div className="infoscp">
                        <div>
                            <h3>ID do Canal:</h3>
                            <input type='text' value={idCnl} onChange={e => setIdCnl(e.target.value)}/>
                        </div>
                        <div>
                            <h3>Nome do Programa:</h3>
                            <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                        </div>
                        <div>
                            <h3>Gênero do Programa:</h3>
                            <input type='text' value={genero} onChange={e => setGenero(e.target.value)}/>
                        </div>
                        <div>
                            <h3>Horário do Programa:</h3>
                            <input type='text' value={hora} onChange={e => setHora(e.target.value)}/>
                        </div>
                    </div>

                    <button onClick={salvarCP}>SALVAR CANAL-PROGRAMA</button>
                </div>

                <div className="secaobusca">
                    <div className="buscar">
                        <h1>Buscar Canais-Programas</h1>
                        <button onClick={buscarCP}>BUSCAR CANAIS-PROGRAMAS</button>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>ID do Canal</th>
                                <th>Nome do Programa</th>
                                <th>Gênero do Programa</th>
                                <th>Horário do Programa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaCP.map(item =>
                                <tr>
                                    <td>{item.idCanal}</td>
                                    <td>{item.nomePrograma}</td>
                                    <td>{item.generoPrograma}</td>
                                    <td>{item.horaPrograma}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}