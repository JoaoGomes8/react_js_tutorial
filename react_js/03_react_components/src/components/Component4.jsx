import React from "react";
import Component5 from "./Component5";

const Component4 = (props) => {
    return(
        <div className="component">
            <p className="title">Título: {props.title} </p>
            <Component5 text="propriedade do componente" />
            <Component5 text="propriedade do componente" />
            <Component5 />
            <Component5 text="propriedade do componente" />
            <Component5 text="propriedade do componente" />
        </div>
    )
}

export default Component4