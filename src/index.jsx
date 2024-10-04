import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import ConsultarCanais from './pages/verCanais';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/' element={<ConsultarCanais/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);