import React from "react";
import { Button } from 'react-bootstrap';

export const ButtonComponent = (props) => {
    return <Button bsStyle={props.bsStyle} bsSize="large" onClick={props.onClick} >{props.buttonLabel}</Button>;
}

export const ShowText = (props) =>{
    return <h1> Text Showing: {props.what} </h1>;
}
