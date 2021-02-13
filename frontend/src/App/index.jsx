import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

const Index = () => {
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <h1>
                    Bem-vindo!
            </h1>
                <br />
                <section className="d-flex justify-content-center">

                    <div id="carouselExampleFade" className="carousel slide carousel-fade w-110" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-110" src="http://localhost/fullstackeletro-jedi-main/frontend/src/assets/imagens/eletro3.jpg" alt="Primeiro Slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-110" src="http://localhost/fullstackeletro-jedi-main/frontend/src/assets/imagens/eletro4.jpg" alt="Segundo Slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Anterior</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Próximo</span>
                        </a>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Index;
