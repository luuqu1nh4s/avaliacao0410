import './index.scss';
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <div className="pagina-home">
            <div className="secao">
                <h1>jhfffkfghffgf</h1>
                <button><Link to = '/verCanais'>CANAIS</Link></button>
            </div>
        </div>
    )
}