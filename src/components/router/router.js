import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import Index from '../index/index';
import PrivateRoute from '../auth/privaterouter';
import Empleados from '../empleados/empleados.buscar';


export default function AppRouter() {
    return(
        <Router>
            <Switch>
                <Route exact path={['/login']} component={Login} />
                <PrivateRoute exact path={["/empleados"]} component={ Empleados }  />
                <Route exact path={['/index']} component={Index} />
                <Route exact path={['/']} component={Index} />
                <Route exact path={'*'} component={ () => (
                    <h1 style={{marginTop: 300}}> 404<br/> Pagina no encontra </h1>
                    )} />
            </Switch>
        </Router>
    )
}

