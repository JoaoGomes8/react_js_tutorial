import React from "react";

const Component8 = (props) =>{
    
    function condition() {
        if(props.value >= 10){
            return <p>O valor é igual ou superior a 10</p>;
        } else {
            return <p>O valor é inferior a 10</p>;
        }
    }

    function test() {
        switch (props.nameTest) {
            case "joao":
                return <p>É o meu nome</p>
            case "paulo":
                return <p>É o nome do meu pai</p>
            default:
                return <p>Nome desconheçido</p>
        }
    }

    return(
        <div className="component">
            <p className="title">Título: {props.title}</p>
            {condition()}
            {test()}
        </div>
    )
}

export default Component8