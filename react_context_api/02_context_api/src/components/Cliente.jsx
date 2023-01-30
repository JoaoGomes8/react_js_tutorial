import ClienteContext from "../contexts/ClienteContext"
import { useContext } from "react"

export default function Cliente() {

    const dados = useContext(ClienteContext)

    return(
        <>
            <hr />
            <h3>cliente</h3>
            <p>Nome: {dados.nome}</p>
            <p>Email: {dados.email}</p>
        </>
    )
}