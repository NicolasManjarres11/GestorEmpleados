import React from 'react'
import { Container, Nav, Row } from 'react-bootstrap';
import EmmpleadosBuscar from './crud/buscar';
import EmpleadosCrear from './crud/crear';
import './empleados.css'
import EmpleadosEditar from './crud/editar';

export default class Empleados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currenTab: "buscar"
        };
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(tab){
        this.setState({currenTab: tab});
    }

    render() {
        return (
            <Container id='empleados-container'>
                <Row>
                    <Nav 
                        fill
                        variant="tabs"
                        defaultActiveKey="buscar"
                        onSelect={(eventKey) => this.setState({currenTab: eventKey})}>
                        <Nav.Item>
                            <Nav.Link eventKey="buscar">Buscar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Crear</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currenTab === 'buscar' ? (
                    <EmmpleadosBuscar changeTab={this.changeTab}/>
                    ) : this.state.currenTab === "crear" ? (
                    <EmpleadosCrear changeTab={this.changeTab}/>
                    ): (
                        <EmpleadosEditar/>
                    )}
                </Row>
            </Container>
        );
    }
}

