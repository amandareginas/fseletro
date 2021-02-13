import React from 'react';

import Categorias from '../Categorias'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

const Produtos = () => {

    const [produto, setProduto] = React.useState([]);
    const [render] = React.useState(false);


    //nesse momento cat = todas
    const [cat, setCat] = React.useState("todas");


    

    React.useEffect(async () => {
        const url = "http://localhost:3333/produto";
        const response = await fetch(url);
        setProduto(await response.json());
    }, [render]);

    //categoria recebe o event.target.id
    function filtro(categoria) {
        setCat(categoria)
    }

    return (
        <div>
         <Header />
        <div className="d-flex justify-content-around">
            <aside className="sidebar col-2 ml-5">
                <br/>
                <Categorias onClick={filtro}/>
            </aside>
        <div className="container mt-5">

            <h1>Produtos</h1>
            <br/>
            <div className="row">
            
            {produto.map((element) => { 
                if(cat == "todas"){
                    console.log(cat);
                    return (

                        <div key={element.idproduto} className="box-produto card col-3 m-3 border-0" id="cards">
                            <div className="card-img">
                                <img className="img-fluid" src={`http://localhost/fullstackeletro-jedi-main/frontend/src/assets/imagens/${element.imagem}`}/>
                            </div>
                            <div className="card-header text-center">
                               {element.descricao}
                            </div>
                            <div className="card-body text-center">
                                <a className="small">De: </a><del className="text-danger small">
                                    R$ {element.preco}</del><br/>
                                    Por: R$ {element.precofinal} <br/>
                            </div>
                        </div>                     
                    );
                }
                if(cat == element.categoria){
                    console.log(cat);
                    return (

                        <div key={element.idproduto} className="box-produto card col-3 m-3 border-0">
                            <div className="card-img">
                                <img className="img-fluid" src={`http://localhost/fullstackeletro-jedi-main/frontend/src/assets/imagens/${element.imagem}`}/>
                            </div>
                            <div className="card-header text-center">
                               {element.descricao}
                            </div>
                            <div className="card-body text-center">
                                <p className="small">De: </p><del className="text-danger small">
                                    R$ {element.preco}</del><br/>
                                    Por: R$ {element.precofinal} <br/>
                            </div>
                        </div>                     
                    );
                }
                
            })}
            </div>
        </div>
        </div>
        <Footer />
        </div>
    );
}

export default Produtos;