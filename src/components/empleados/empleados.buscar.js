import React from 'react';
import { Container } from 'react-bootstrap';
import './empleados.css';
export default class EmpleadosBuscar  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <Container id='empleados-buscar-container'>
                <h1 style={{marginTop: 200}} > 
                Empleados buscar 
                </h1>
            </Container>
            
         );
    }
}
 