import './index.scss';
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <div className="pagina-home">
            <div className="secaomae">
                <h1>Páginas das APIs da Atividade de 04/10</h1>
                <div className="botoes">
                    <button className='verCanal'><Link to = '/pageCanais'>CANAIS</Link></button>
                    <button className='verCanalProg'><Link to = '/pageCanalPrograma'>CANAIS & PROGRAMAS</Link></button>
                    <button className='verProgFav'><Link to = '/pageProgramaFav'>PROGRAMAS FAVORITOS</Link></button>
                    <button className='verUsers'><Link to = '/pageUsuarios'>USUÁRIOS</Link></button>
                </div>
            </div>
        </div>
    )
}