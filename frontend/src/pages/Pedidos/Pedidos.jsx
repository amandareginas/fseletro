import React from 'react';
import Header from '../../components/Header';
import Comentario from './Comentario';

const Pedidos = () => {

    const [form, setForm] = React.useState({
        nome_cliente: "",
        endereco_cliente: "",
        email_cliente: "",
        nome_produto: "",
        valorunitario: "",
        quantidade: "",
        valortotal: ""
    });



    const [produto, setProduto] = React.useState([]);
    React.useEffect(async () => {
        const url = "http://localhost:3333/produto";
        const response = await fetch(url);
        setProduto(await response.json());
    }, []);


    const controleMudanca = (event) => {
        //console.log(event.target.value)
        setForm({
            ...form,
            [event.target.id]: event.target.value
        })
    }

    function controleEnvio(event) {
        console.log(event.target);
        event.preventDefault();

        const { nome_cliente, endereco_cliente, email_cliente, nome_produto, valorunitario, quantidade, valortotal } = event.target

        let objeto = {
            "nome_cliente": nome_cliente.value,
            "endereco_cliente": endereco_cliente.value,
            "email_cliente": email_cliente.value,
            "nome_produto": nome_produto.value,
            "valorunitario": valorunitario.value,
            "quantidade": quantidade.value,
            "valortotal": valortotal.value
        }

        const url = "http://localhost:3333/pedidos";
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(objeto)
        })
    }

    function sucesso() {
        document.getElementById("mostrar").innerHTML = "Pedido enviado com sucesso!";
    }

    return (
        <div>
            <div>
                <h2>Faça o seu Pedido</h2>
                <br />
                    <form onSubmit={controleEnvio} className="col-11">
                        <div className="form-group">
                            <label>Nome</label>
                            <input className="form-control" onChange={controleMudanca} type="text" name="nome_cliente" id="nome_cliente" />
                        </div>
                        <div className="form-group">
                            <label>Endereço</label>
                            <input className="form-control" onChange={controleMudanca} type="endereco_cliente" id="endereco_cliente" name="endereco_cliente" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" onChange={controleMudanca} type="text" id="email_cliente" name="email_cliente" />
                        </div>
                        <div className="form-group">
                            <label>Produto</label>
                            <select className="form-control" onChange={controleMudanca} id="nome_produto" name="nome_produto">
                                {produto.map(item => {
                                    return (
                                        <option key={item.idproduto}>{item.descricao}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="row d-flex justify-content-around">
                        <div className="form-group">
                            <label>Valor Unitário</label>
                            <input className="form-control col" onChange={controleMudanca} id="valorunitario" type="text" name="valorunitario" />
                        </div>
                        <div className="form-group">
                            <label>Quantidade</label>
                            <input min="1" max="10" className="form-control col" id="quantidade" onChange={controleMudanca} name="quantidade" type="number" />
                        </div>
                        <div className="form-group">
                            <label>Preço Final</label>
                            <input className="form-control col" type="text" id="valortotalS" name="valortotal" />
                        </div>
                        </div>
                        <button className="btn btn-dark" onClick={sucesso}>Enviar</button>
                        <br /><br />
                        <div className="alert alert-success" role="alert" id="mostrar"></div>
                    </form>
                <br />

            </div>
        </div>
    );



}

export default Pedidos;