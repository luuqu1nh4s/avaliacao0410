import './index.scss';
import { useState } from "react";
import axios from 'axios';

export default function ConsultarCanais(){
    const [listaCanais, setListaCanais]= useState ([]);

    async function buscarCanais(){
        const url = 'http://localhost:1004/canal';
        let resp = await axios.get(url);
        setListaCanais(resp.data)
    }

    return(
        <div className="pagina-ver-canais">
            <div className="secao">
                <button onClick={buscarCanais}>BUSCAR CANAIS</button>

                <table>
                    <thead>
                        <tr>
                            <th>ID do Canal</th>
                            <th>Nome do Canal</th>
                            <th>Número do Canal</th>
                            <th>É Aberto?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaCanais.map(item =>
                            <tr>
                                <td>{item.idCanal}</td>
                                <td>{item.nomeCanal}</td>
                                <td>{item.numCanal}</td>
                                <td>{item.estaAberto ? 'Sim': 'Não'}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
