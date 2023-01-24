import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import '../Contacto.css'

export default function Contacto({ nome, telefone, remover, id }) {
    return (
        <div className="mx-2">
            <div className="container componente-contacto my-4">
                <div className="row">
                    <div className="col p-2">
                        <h4><FontAwesomeIcon icon={faUser} className="me-3" /> {nome} </h4>
                    </div>
                    <div className="col p-2">
                        <h4><FontAwesomeIcon icon={faPhoneVolume} className="me-3" /> {telefone}</h4>
                    </div>
                    <div className="col p-2 text-end">
                        <h4><FontAwesomeIcon onClick={() => { remover(id) }} icon={faTrashAlt} className="me-3" /> </h4> 
                    </div>
                </div>
            </div>
        </div>



    )

}