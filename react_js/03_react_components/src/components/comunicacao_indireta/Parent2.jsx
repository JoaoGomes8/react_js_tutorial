import React from "react";
import Child2 from "./Child2";

const Parent2 = (props) =>{

    function clicked() {
        console.log('Botão do Child foi clicado!');
    }
    return(
        <div className="component">
            <p className="title">Título: {props.title}</p>
            <Child2 title="Child2" click={clicked}/>
        </div>
    )
}

export default Parent2