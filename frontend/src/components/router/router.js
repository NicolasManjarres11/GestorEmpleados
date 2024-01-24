import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../auth/privateroute'

import Login from "../login/login"
import EmmpleadosBuscar from '../empleados/empleados.buscar' 
export default function AppRouter(){
    return(
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component={Login}/>
                <PrivateRoute exact path="/empleados" component={EmmpleadosBuscar} />
                <Route
                    path={'*'}
                    component={() =>( 
                        <h1 style={{marginTop: 300}}>
                            400
                            <br/>
                            Página no encontrada manito
                        </h1>
                    )}
                />
            </Switch>
        </Router>
    )
}

/* function Home () {
    return(
            <h2 style={{ marginTop: 300}}> Home, bienvenidooo </h2>
    )
} */
 
