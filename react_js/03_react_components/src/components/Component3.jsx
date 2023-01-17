import React from "react"
    
const Component3 = (props) => {
    return(
        <div className="component">
            <p className="title">Título: {props.title}</p>
            <p>Subtítulo: {props.subtitle}</p>
        </div>
    )
}

export default Component3