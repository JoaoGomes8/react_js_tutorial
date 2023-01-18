import React from "react";

const Child = (props) =>{
    return(
        <div className="component">
            <p className="title">Título: {props.title}</p>
            <p>Cargo: {props.role} -&gt; {props.children}</p>
        </div>
    )
}

export default Child