import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home'
import Canais from './pages/pageCanais';
import CanaisProgramas from './pages/pageCanalPrograma';
import ProgramasFavoritos from './pages/pageProgramaFav';
import Usuarios from './pages/pageUsuarios';

export default function Navegacao(){
    return(
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/pageCanais' element={<Canais/>}/>
              <Route path='/pageCanalPrograma' element={<CanaisProgramas/>}/>
              <Route path='/pageProgramaFav' element={<ProgramasFavoritos/>}/>
              <Route path='/pageUsuarios' element={<Usuarios/>}/>
          </Routes>
      </BrowserRouter>
    )
}