import React from "react";
import Filho from "./Filho";

const Pai = (props) =>{
    return(
        <div className="component">
            <p className="title">Pai</p>
            {/* <Filho nome={props.nome} /> */}
            <Filho {...props} />
        </div>
    )
}

export default Pai