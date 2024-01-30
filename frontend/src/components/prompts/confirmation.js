import React from 'react'
import { Button, Modal } from 'react-bootstrap';

export default class ConfirmationPromps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: '',
            text: '',
        }
    }

/*     componentWillReceiveProps(nextProps) {
        if (nextProps.show) this.setState({show: true});
    } */

/*      componentDidUpdate(prevProps) {
        if (prevProps.show !== this.props.show) {
          this.setState({ 
            show: true,
            title: prevProps.title,
            text: prevProps.text,
        });
        }
      }  */

componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.show,
            title: nextProps.title,
            text: nextProps.text
        })
      } 

/*       componentDidUpdate(prevProps) {
        if (prevProps.show) {this.setState({ show: true });
        }
      } */

/*       componentDidUpdate() {
        this.setState({
            show: this.props.show,
            title: this.props.title,
            text: this.props.text,
        });
    } */

    render() {
        return (
            <Modal 
                show={this.state.show}
                centered
                onHide={() => this.props.onCancel()}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{this.state.text}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" 
                    onClick={() => this.props.onCancel()}
                    >Cancelar</Button>
                    <Button variant="primary"
                    onClick={() => this.props.onConfirm()}>Confirmar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

