import { useState } from "react"
import { useParams } from "react-router-dom";

export default function About() {

    const [usuarios] = useState(['joao','ze']) 
    const {id} = useParams()

    return(
        <>
            <h1>About</h1>
            <p>{usuarios[id]}</p>
        </>
    )
}