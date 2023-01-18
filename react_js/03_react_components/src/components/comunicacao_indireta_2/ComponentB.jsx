import React from "react";

const ComponentB = (props) => {

    function exe2() {
        props.funcao('Valor: ' + Math.random(), 'joao')
    }

    return(
        <div className="component">
            <p className="title">Título: {props.title}</p>
            <button onClick={exe2}>Executar</button>
        </div>
    )
}

export default ComponentB