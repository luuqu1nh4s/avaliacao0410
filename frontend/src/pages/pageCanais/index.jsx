import './index.scss';
import { useState } from "react";
import axios from 'axios';

export default function Canais(){
    const[nome, setNome] = useState ('');
    const[num, setNum] = useState ('');
    const[aberto, setAberto] = useState(false);
    const[listaCanais, setListaCanais] = useState ([]);

    async function salvarCanais(){
        const paramcorpo = {
            "nomeCanal": nome,
            "numCanal": num,
            "eAberto": aberto
        }
        const url = 'http://localhost:1004/canal';
        let resp = await axios.post(url, paramcorpo);
        alert (`Canal de id ${resp.data.novoId} adicionado.`)
    }

    async function buscarCanais(){
        const url = 'http://localhost:1004/canal';
        let resp = await axios.get(url);
        setListaCanais(resp.data)
    }

    return(
        <div className="pagina-canais">
            <div className="secaomae">
                <div className="secaocadastro">
                    <h1>Cadastrar Canal</h1>

                    <div className="infoscanal">
                        <div>
                            <h3>Nome do Canal:</h3>
                            <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                        </div>
                        <div>
                            <h3>Número do Canal:</h3>
                            <input type='text' value={num} onChange={e => setNum(e.target.value)}/>
                        </div>
                        <div>
                            <h3>Canal Aberto:</h3>
                            <input type='checkbox' checked={aberto} onChange={e => setAberto(e.target.checked)}/>
                        </div>
                    </div>

                    <button onClick={salvarCanais}>SALVAR CANAL</button>
                </div>

                <div className="secaobusca">
                    <div className="buscar">
                        <h1>Buscar Canais</h1>
                        <button onClick={buscarCanais}>BUSCAR CANAIS</button>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>ID do Canal</th>
                                <th>Nome do Canal</th>
                                <th>Número do Canal</th>
                                <th>Canal Aberto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaCanais.map(item =>
                                <tr>
                                    <td>{item.idCanal}</td>
                                    <td>{item.nomeCanal}</td>
                                    <td>{item.numCanal}</td>
                                    <td>{item.eAberto ? 'Sim': 'Não'}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
