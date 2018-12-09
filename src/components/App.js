import React, { Component } from "react";
import { Button } from  'react-bootstrap';
import { Modal } from  'react-bootstrap';
import { ModalHeader } from  'react-bootstrap';
import { ModalTitle } from  'react-bootstrap';
import { ModalBody } from  'react-bootstrap';
import { ModalFooter } from  'react-bootstrap';
import { ShowText } from './presentation/buttonComponent';
import { ButtonComponent } from './presentation/buttonComponent';



import $ from 'jquery';
import Popper from 'popper.js';


import '../styles/testApp.css';

const userData = {};
class App extends Component {
    constructor(props, context){
        super(props, context);
        
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = { show: false, what: "component showing"};
    }

    handleClose() {
        this.setState({ show: false});
    }

    handleShow() {
        this.setState({ show: true});
    }

    
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <ShowText what={this.state.what} />
                <ButtonComponent bsStyle={"primary"} onClick={this.handleShow}  buttonLabel = {"Show Modal"}/>
             
                <Modal show={this.state.show} onHide={this.handleClose}>
                <ModalHeader>
                    <ModalTitle>Create Account</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    {/* <h2>Another div</h2> */}
                    <form>
                        <div className="form-group"> <input type="text" className="form-control-sm" /></div>
                        <div className="form-group"> <input type="text" className="form-control-sm" /></div>
                        <div className="form-group"> 
                        <button type="submit" className="btn btn-primary">
                                Send
                        </button>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                <ButtonComponent bsStyle={"danger"} onClick={this.handleClose} buttonLabel = {"Close"}/>
                <ButtonComponent bsStyle={"success"}  buttonLabel = {"Save Changes"} />
                </ModalFooter>
                </Modal> 
            </div>
        );
    }
}


export default App;