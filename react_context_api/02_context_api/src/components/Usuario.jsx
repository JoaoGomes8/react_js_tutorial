import UsuarioContext from "../contexts/UsuarioContext"
import { useContext } from "react"

export default function Usuario() {

    const usuario = useContext(UsuarioContext)

    return(
        <>
            <hr />
            <h3>usuario</h3>
            <p>Usuário: {usuario.usuario}</p>
            <p>Perfil: {usuario.perfil}</p>
        </>
    )
}