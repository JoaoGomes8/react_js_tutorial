import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Nomes({nomes}) {
    return(
        <>
            {nomes.map(nm => <p key={uuidv4()}>{nm} - {uuidv4()}</p> )}
            
        </>
    )
}