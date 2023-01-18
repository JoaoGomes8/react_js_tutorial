import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = (props) => {

    function exe(value1, value2) {
        console.log(value1);
        console.log(value2);
    }

    return(
        <div className="component">
            <p className="title">Título: {props.title}</p>
            <ComponentB title="Filho" funcao={exe} />
        </div>
    )
}

export default ComponentA