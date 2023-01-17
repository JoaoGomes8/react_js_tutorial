import React from "react";

const Component7 = (props) => {

    return(
        <div className="component">
            <p className="title">Título: {props.title} </p>
            
            {props.value === true ?
                <div>
                    <p>Análise do valor</p>
                    <p>Verdadeiro</p> 
                </div>
                : 
                <div>
                    <p>Análise do valor</p>
                    <p>Falso</p> 
                </div>
                
            }
        </div>
    )
}



export default Component7