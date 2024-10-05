import canalController from './controller/canalController.js';
import canalprogController from './controller/canalprogController.js';
import progfavController from './controller/progfavController.js';
import usuarioController from './controller/usuarioController.js';

export default function adicionarRotas(servidor){
    servidor.use(canalController);
    servidor.use(canalprogController);
    servidor.use(progfavController);
    servidor.use(usuarioController);
}