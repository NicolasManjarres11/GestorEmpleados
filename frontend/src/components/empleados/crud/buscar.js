import React from "react";
import { request } from "../../helper/helper";
import { Col, Container, Row } from "react-bootstrap";
/* import "./empleados.css"; */
import DataGrid from "../../grid/grid";

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
        this.state = {};
    }

    componentDidMount() {
        
    }

    render() {
       
        return (
            <Container id="empleados-buscar-container">
                <Row>
                    <h1 style={{ marginTop: '20px'}}>Buscar Empleados</h1>
                </Row>
                <Row>
                    <DataGrid url="/empleados" columns={columns}/>
                </Row>
            </Container>
        );
    }
}
