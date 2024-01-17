import React from 'react'
import './navbar.css'
import { Container, Dropdown, DropdownButton, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Navbar fixed='top' id='navbar' expand="lg" variant='dark' bg="primary">
                <Container>
                    <Navbar.Brand href="#home">Movie Rentail <span id='usuario-sub-branm'></span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link> */}
                        </Nav>
                        <DropdownButton id="dropdown-basic-button" title="Usuario">
                            <Dropdown.Header id='dropdown-header'>
                                <Row>
                                    <FontAwesomeIcon icon={faUserCircle}/>
                                </Row>
                                <Row>
                                    #USUARIO#
                                </Row>
                            </Dropdown.Header>
                            <Dropdown.Divider/>
                            <Dropdown.Item href="#/action-1">Cerrar sesión</Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

;