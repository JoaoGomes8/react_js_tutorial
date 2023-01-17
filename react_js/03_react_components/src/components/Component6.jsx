import React from "react";
import client_data from "../client_data/client_data";

const Component6 = (props) => {

    function client() {
        return client_data.map(c =>{
            return <li key={c.client_id}>Nome: {c.name} | Email: {c.email} </li>
        })
    }

    


    return(
        <div className="component">
            <p className="title">Título: {props.title} </p>

            <ul>
                {client()}
            </ul>
        </div>
    )

    
}

export default Component6