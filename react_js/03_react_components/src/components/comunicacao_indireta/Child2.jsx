import React from "react";

const Child2 = (props) =>{
    return(
        <div className="component">
            <p className="title">Título: {props.title}</p>
            <button onClick={props.click}>Clicar</button>
        </div>
    )
}

export default Child2