import React from 'react'
import axios from 'axios';
import './login.css'
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import host from '../../app.json'
import { isNull} from 'util'
import Cookies from 'universal-cookie';
import { calculaExtracionSesion } from '../helper/helper';
import Loading from '../loading/loading';



const cookies = new Cookies();

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            usuario: '',
            pass: '',
        }
    }

    iniciarSesion(){

        this.setState({loading: true});

        axios.post(`${host.APIHOST}/usuarios/login`, {
            usuario: this.state.usuario,
            pass: this.state.pass,
        })
        .then((response) => {

            if(response.data.token == null){
                alert('Usuario y contraseña inválidos')
            } else {
                cookies.set('_s', response.data.token, {
                    path: '/',
                    expires: calculaExtracionSesion()
                });
                this.props.history.push('/empleados')
            }
            this.setState({loading: false});
        })
        .catch((err) => {
            console.log(err);
            this.setState({loading: false});
        }) 
    }

    render() {
        return (
            <Container id='login-container'>

                <Loading show={this.state.loading}/>

                <Row>
                    <Col>
                        <Row>
                            <h2>Iniciar Sesión</h2>
                        </Row>
                        <Row>
                            <Col 
                                sm="12"
                                xs="12"
                                md={{span: 4, offset: 4}}
                                lg={{span: 4, offset: 4}}
                                xl={{span: 4, offset: 4}}>
                                    
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control onChange={(e) => this.setState ({usuario: e.target.value})
                                    }/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" onChange={(e) => 
                                        this.setState({ pass: e.target.value})} />
                                    </Form.Group>
                                    <Button variant="primary"
                                    onClick={() => {
                                        this.iniciarSesion();
                                    }}>
                                        Iniciar sesión
                                    </Button>
                                </Form>
                            </Col>

                        </Row>
                    </Col>
                </Row>

            </Container>
        );
    }
}

