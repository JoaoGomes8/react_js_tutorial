import Login from "./Login"

import AuthContext from "../providers/AuthContext"
import { useContext } from "react"

export default function Userbar() {

    const AuthDados = useContext(AuthContext)
    return(
        <>
            <hr />
            <p>Usuário: <strong>{AuthDados.usuario}</strong></p>
            <p>Perfil: {AuthDados.perfil}</p>
            <hr />
            <Login />
        </>
    )
}