import React from "react";

function Component1(props) {
    return(
        <div className="component">
            <p className="title">Título: {props.title}</p>
            <p>Componente mais simples de React</p>
        </div>
    )
}

export default Component1