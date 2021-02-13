import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Comentario from './Comentario';
import Pedidos from './Pedidos';

const Pedido = () => {
    return (
        <div>
            <Header />
            <div className="container d-flex justify-content-around mt-5">
            <Pedidos />
            <Comentario />
            </div>
            <Footer />
        </div>
    )
}

export default Pedido;