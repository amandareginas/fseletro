import React from 'react';

const Comentario = () => {

    const [comentario, setComentario] = React.useState([]);
    React.useEffect(async () => {
        const url = "http://localhost:3333/comentarios";
        const response = await fetch(url);
        setComentario(await response.json());
    }, []);

    return (
        <div className="text-right pl-5">
            <h2>Comentários</h2>
            <br/>
            <section className="formulario">
                {comentario.map (item => {
                    return (
                        <div>
                            <hr />
                            <h6>{item.descricao}</h6>
                            <p>Nome: {item.nome}</p>
                            <p>Mensagem: {item.msg}</p>
                            <p>Data: {item.data}</p>
                            
                        </div>          
                    )
                })
                }               
            </section>         
        </div>
    );
}

export default Comentario;