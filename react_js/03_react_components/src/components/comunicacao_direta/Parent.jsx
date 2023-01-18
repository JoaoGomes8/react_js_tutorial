import React from "react";
import Child from "./Child";

const Parent = (props) =>{
    return(
        <div className="component">
            <p className="title">Título: {props.title}</p>
            <Child title="Componente Child" role="admin">
                João Gomes
            </Child>
            
            <Child title="Componente Child" role="secretária">
                Ana silva
            </Child>

            <Child title="Componente Child" role="operador">
                Carlos Santos
            </Child>

        </div>
    )
}

export default Parent