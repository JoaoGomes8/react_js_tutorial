import React from "react";

export default function Contacto({nome,telefone,remover,id}) {
    return (
        <div>
            {nome} - {telefone}
            <button onClick={() => { remover(id)}}>Remover</button>
        </div>
        
    ) 

}