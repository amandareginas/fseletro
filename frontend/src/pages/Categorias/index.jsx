import React from 'react';
import './styles.css'

/* 
const Categorias = () => {
    
        const [produto, setProduto] = React.useState([]);
        const [render] = React.useState(false);
        
    
        React.useEffect(async () => {
            const url = "http://localhost/fullStackEletro-jedi/backend/";
            const response = await fetch(url);
            setProduto(await response.json());
        }, [render]);
    
    
        return (
            <div className="container col-2">
                
                {produto.map((element) => {
                    return (
                        <nav className="sideBar">
                            <div key={element.idproduto} className="">
                            <div className="card-header text-center">
                               {element.categoria}
                            </div>
                        </div>   
                        </nav>                  
                    );
                })}
            </div>
        );
}

*/

/*
const Categorias = () => {

    function exibir_categoria(categoria) {
        //alert(categoria);
        let elementos = document.getElementsByClassName('box-produto');
        console.log(elementos);
        for (var i = 0; i < elementos.length; i++) {
            console.log(elementos[i].id);
            if (categoria == elementos[i].id)
                elementos[i].style = "display:inline-block";
            else
                elementos[i].style = "display:none"
        }
    
    };
    
    
    let exibir_todas = () => {
        let elementos = document.getElementsByClassName('box-produto');
    
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].style = "display:inline-block";
        }
    }

    return (
        <div className="container col-2">

            <ul className="list-group mt-5 text-center">
                <li onClick={() => exibir_todas} className="list-group-item font-weight-bold bg-dark text-white">Categorias</li>
                <li onClick={() => exibir_categoria('geladeira')} className="list-group-item">Geladeira</li>
                <li onClick={() => exibir_categoria('fogao')} className="list-group-item">Fogão</li>
                <li onClick={() => exibir_categoria('microondas')} className="list-group-item">Microondas</li>
                <li onClick={() => exibir_categoria('lava-loucas')} className="list-group-item">Lava-louças</li>
                <li onClick={() => exibir_categoria('lavadora de roupas')} className="list-group-item">Máquina de Lavar</li>
            </ul>
        </div>
    );
}
*/



const Categorias = (props) => {

    function filtro(event) {
        props.onClick(event.target.id) // pega o valor do id do onClick e props recebe esse valor como parâmetro
    }

    return (
        <div>
            <br />
            <br />
            <br />
            <ul className="list-group mt-5 text-center sidebar" id="tamanhocategoria">
                <li onClick={filtro} className="list-group-item font-weight-bold" id="categoria">Categorias</li>
                <li onClick={filtro} id="todas" className="list-group-item" id="categoriax">Todas</li>
                <li onClick={filtro} id="geladeira" className="list-group-item" id="categoriax">Geladeira</li>
                <li onClick={filtro} id="fogao" className="list-group-item" id="categoriax">Fogão</li>
                <li onClick={filtro} id="microondas" className="list-group-item" id="categoriax">Microondas</li>
                <li onClick={filtro} id="lava-loucas" className="list-group-item" id="categoriax">Lava-louças</li>
                <li onClick={filtro} id="lavadora de roupas" className="list-group-item" id="categoriax">Máquina de Lavar</li>
            </ul>
        </div>
    )
}

export default Categorias;


