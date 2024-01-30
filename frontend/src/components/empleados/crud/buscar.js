import React from "react";
import { request } from "../../helper/helper";
import { Col, Container, Row } from "react-bootstrap";
/* import "./empleados.css"; */
import DataGrid from "../../grid/grid";
import ConfirmationPromps from "../../prompts/confirmation";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";


import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
    SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";


const columns = [
    {
        dataField: "_id",
        text: "Product ID",
        hidden: true,
    },
    {
        dataField: "nombre",
        text: "Nombre",
    },
    {
        dataField: "apellido_p",
        text: "Primer apellido",
    },
    {
        dataField: "apellido_m",
        text: "Segundo apellido",
    },
    {
        dataField: "telefono",
        text: "Teléfono",
    },
    {
        dataField: "mail",
        text: "Email",
    },
    {
        dataField: "direccion",
        text: "Dirección",
    },
];

export default class EmmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            idEmpleado: null,
            confirmation: {
                title: 'Eliminar empleado',
                text: '¿Deseas eliminar el empleado?',
                show: false,
            },
            message: {
                text: '',
                show: false,
            }
        };

        this.onClickEditButton = this.onClickEditButton.bind(this);
        this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount() { }

    onClickEditButton(row) {
        this.props.setIdEmpleado(row._id);
        this.props.changeTab('editar');
    }

    onClickDeleteButton(row) {
        this.setState({
            idEmpleado: row._id,
            confirmation: {
                ...this.state.confirmation,
                show: true,
            }
        })
    }

    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            }
        })
    }

    onConfirm() {
        this.setState(
            {
                confirmation: {
                    ...this.state.confirmation,
                    show: false,
                },
            },
            this.eliminarEmpleado())
    }

    eliminarEmpleado() {
        this.setState({ loading: true })
        request
            .delete(`/empleados/${this.state.idEmpleado}`)
            .then((response) => {
                this.setState({
                    loading: false,
                    message: {
                        text: response.data.msg,
                        show: true,
                    }
                });
                if(response.data.exito) window.location.reload();
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            })
    }

    reloadPage() {
        setTimeout(() => {
            window.location.reload();
        }, 2500)
    }

    render() {

        return (
            <Container id="empleados-buscar-container">

                <ConfirmationPromps
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />

                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />

                <Loading show={this.state.Loading} />

                <Row>
                    <h1 style={{ marginTop: '20px' }}>Buscar Empleados</h1>
                </Row>
                <Row>
                    <DataGrid
                        url="/empleados"
                        columns={columns}
                        showEditButton={true}
                        showDeleteButton={true}
                        onClickEditButton={this.onClickEditButton}
                        onClickDeleteButton={this.onClickDeleteButton} />
                </Row>
            </Container>
        );
    }
}
