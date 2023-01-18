import React from "react";



const Filho = (props) =>{
    return(
        <div className="component">
            <p className="title">Filho: {props.nome} {props.apelido}</p>
        </div>
    )
}

export default Filho