import React from "react";

const Component10 = (props) => {

    // const style = {
    //     color: "red", 
    //     padding: "10px", 
    //     backgroundColor: "yellow"
    // }

    return(
        <div className="component">
            <p className="title">Título: {props.title}</p>
            {/* <p style={{color: "red", padding: "10px", backgroundColor: "yellow"}}>Texto do parágrafo</p> */}
            {/* <p style={style}>Texto do parágrafo</p> */}
            <p style={{color: props.textColor}}>Texto do parágrafo</p>
        </div>
    )
}

export default Component10