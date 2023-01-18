import React from "react";
import Pai from "./Pai";

const Avo = (props) =>{
    return(
        <div className="component">
            <p className="title">Avô</p>
            <Pai nome="joao" apelido="gomes"/>
        </div>
    )
}

export default Avo