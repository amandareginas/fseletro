import React from 'react';
import {Link} from 'react-router-dom';
import '../Header/styles.css'

const Header = () => {
    return(
        <div>
            <div id="menu">
                <ul className="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <Link id="texto" class="nav-link" aria-current="page" to="/">FullStack Eletro</Link>
                    </li>
                    <li class="nav-item">
                        <Link id="texto" class="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link id="texto" class="nav-link" to="/Contato">Contato</Link>
                    </li>
                    <li class="nav-item">
                        <Link id="texto" class="nav-link" to="/Lojas">Lojas</Link>
                    </li>
                    <li class="nav-item">
                        <Link id="texto" class="nav-link" to="/Pedidos">Pedidos</Link>
                    </li>
                    <li class="nav-item">
                        <Link id="texto" class="nav-link" to="/Produtos">Produtos</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;