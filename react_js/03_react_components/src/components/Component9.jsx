import React from "react";
import ConditionIf from "./ConditionIf";

const Component9 = (props) =>{
    return(
        <div className="component">
            <p className="title">Título: {props.title}</p>
            <p>Nome: {props.value}</p>

            <ConditionIf condition={props.value === "joao"}>
                <p>Verdadeiro, é o meu nome</p>
            </ConditionIf>

            <ConditionIf condition={props.value === "paulo"}>
                <p>É o meu pai</p>
            </ConditionIf>

            <ConditionIf condition={props.value !== "joao" && props.value !== "paulo" }>
                <p>False, desconheço este nome</p>
            </ConditionIf>
        </div>


        
    )
    
}

export default Component9