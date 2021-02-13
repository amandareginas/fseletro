import React, { lazy, Suspense } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

//import Comentario from './Comentario';
//import Pedidos from './Pedidos';

const Pedidos = lazy(() => import('./Pedidos'));
const Comentario = lazy(() => import('./Comentario'));


const Pedido = () => {
    return (
        <div>
            <Header />
            <div className="container d-flex justify-content-around mt-5">
                <Suspense fallback={<p>"Carregando Formulário"</p>}>
                    <Pedidos />
                </Suspense>
                <Suspense fallback={<div>"Carregando comentários"</div>}>
                    <Comentario />
                </Suspense>
            </div>
            <Footer />
        </div>
    )
}

export default Pedido;