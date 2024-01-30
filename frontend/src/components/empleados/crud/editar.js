import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';
import ConfirmationPromps from '../../prompts/confirmation';






export default class EmpleadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idEmpleado: this.props.getIdEmpleado(),
            redirect: false,
            message: {
                text:"",
                show: false,
            },
            confirmation: {
                title:"Modificar empleado",
                text:"¿Deseas modificar el empleado?",
                show:false,
            },
            loading: false,
            empleado: {
                nombre: "",
                apellido_p: "",
                apellido_m: "",
                telefono: "",
                mail: "",
                direccion: "",
            }
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
        this.onCancel= this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount(){
        this.getEmpleado();
    }

    getEmpleado() {
        this.setState({ loading: true});
        request
            .get(`/empleados/${this.state.idEmpleado}`)
            .then((response) =>{
                console.log(response);
                this.setState({
                    empleado: response.data,
                    loading: false});
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false});
            })
    }

    setValue(index, value){
        this.setState({
            empleado: {
                ...this.state.empleado,
                [index]: value,
            }
        })
    }

    guardarEmpleados(){
        this.setState({ loading: true});
        request
            .put(`/empleados/${this.state.idEmpleado}`, this.state.empleado)
            .then((response) => {
                if(response.data.exito){
                    /* this.props.changeTab('buscar'); */
                    this.setState({
                        redirect: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        }
                    })
                }
                this.setState({ loading: false})
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            })
    }

    onExitedMessage() {
        if (this.state.redirect) this.props.changeTab('buscar')
    }

    onCancel(){
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            }
        })
    }

    onConfirm(){
        this.setState(
            {
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        },
        this.guardarEmpleados())
    }



    render() {
        return (
            <Container id='empleados-crear-container'>

                <MessagePrompt 
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}/>

                <ConfirmationPromps
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />

                

                <Loading show={this.state.loading}/>

                <Row>
                    <h1>Editar empleados</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className='mb-3' controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                value={this.state.empleado.nombre}
                                onChange={(e) => this.setValue('nombre', e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasic">
                            <Form.Label>Primer apellido</Form.Label>
                            <Form.Control 
                                value={this.state.empleado.apellido_p}
                                onChange={(e) => this.setValue('apellido_p', e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasic">
                            <Form.Label>Segundo apellido</Form.Label>
                            <Form.Control 
                                value={this.state.empleado.apellido_m}
                                onChange={(e) => this.setValue('apellido_m', e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasic">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control 
                                value={this.state.empleado.telefono}
                                onChange={(e) => this.setValue('telefono', e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasic">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control 
                                value={this.state.empleado.mail}
                                onChange={(e) => this.setValue('mail', e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId="formBasic">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control 
                                value={this.state.empleado.direccion}
                                onChange={(e) => this.setValue('direccion', e.target.value)} />
                        </Form.Group>

                        {/* <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group> */}
                        <Button 
                            variant="primary"
                            onClick={() => 
                                this.setState({
                                    confirmation: {...this.state.confirmation, show: true}
                                })}>
                            Guardar Empleado
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}

