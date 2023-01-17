import React from "react";

function Component1(props) {
    return(
        <div className="component">
            <p>Título: {props.title}</p>
            <p>Componente mais simples de React</p>
        </div>
    )
}

export default Component1