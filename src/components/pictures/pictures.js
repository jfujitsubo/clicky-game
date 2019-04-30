import React from "react";
import "./pictures.css";

const Pictures = props => (
    <div className = "picture" onClick = {() => props.clickCount(props.id)}>
        <div className = "img-container">
            <img alt = {props.name} src={props.image} />
        </div>
    </div>
);

export default Pictures;