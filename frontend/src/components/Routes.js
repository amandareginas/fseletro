import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../App/index';
import Categorias from '../pages/Categorias/index';
import Contato from '../pages/Contato/index';
import Lojas from '../pages/Lojas/index';
import Pedidos from '../pages/Pedidos/index';
import Produtos from '../pages/Produtos/index';

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/Categorias" component={Categorias}/>
            <Route path="/Contato" component={Contato}/>
            <Route path="/Lojas" component={Lojas} />
            <Route path="/Pedidos" component={Pedidos} />
            <Route path="/Produtos" component={Produtos} />
        </Switch>
    )
}

export default Routes;