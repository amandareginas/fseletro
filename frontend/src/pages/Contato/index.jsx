import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Contato = () => {

    const[mostrar, setMostrar] = React.useState([])

    const[comentariox, setComentariox] = React.useState({
        nome: "",
        produto: "",
        descricao: ""
    })

    function insere(event) {
        setComentariox({
            ...comentariox,
            [event.target.id]: event.target.value
        })
    }

    React.useEffect(() => {
        const url = "http://localhost:3333/comentariox-mostrar";
        fetch(url).then(res => res.json()).then(resposta => {
            setMostrar(resposta);
        })
    },[])


    async function enviarComentariox(event) {
        event.preventDefault();
        const url = "http://localhost:3333/comentariox";
        const {nome, produto, descricao} = event.target;
        let resultado = {
            "nome":nome.value,
            "produto":produto.value,
            "descricao":descricao.value
        }
        await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(resultado)
        })
    }

    return (
        <div>
            <Header />
            <div className="container mt-5">
                <header><h2>Fale Conosco!</h2></header>

                <main className="mt-5 ml-4">
                    <ul>
                        <h4>Nossos números:</h4>
                        <li className="mt-3 ml-2">Filial São liaulo: (11) 98765-4321</li>
                        <li className="mt-3 ml-2">Filial Rio de Janeiro: (21) 98765-4321</li>
                        <li className="mt-3 ml-2">Filial Minas Gerais: (31) 98765-4321</li>
                    </ul>
                </main>
            </div>

            <div>
                <h1>Comentarios</h1>
                {mostrar.map((coment, index) => {
                    return (
                        <div key={index}>
                            <h4>Nome: {coment.nome}</h4>
                            <p>Produto: {coment.produto}</p>
                            <p>Descrição: {coment.descricao}</p>
                        </div>
                    )
                })}
            </div>

            <div>
                <form onSubmit={enviarComentariox}>
                    <label for="nome">Nome:</label>
                    <input onChange={insere} type="text" name="nome" id="nome"/>
                    <label for="produto">Produto:</label>
                    <input onChange={insere} type="text" name="produto" id="produto"/>
                    <label for="descricao">Descrição:</label>
                    <input onChange={insere} type="text" name="descricao" id="descricao"/>
                    <button>Enviar</button>
                </form>
            </div>


            <Footer />
        </div>
    )
}

export default Contato;