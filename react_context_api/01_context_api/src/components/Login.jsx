import AuthContext from "../providers/AuthContext"
import { useContext } from "react"


export default function Login({login}) {

    const AuthDados = useContext(AuthContext)

    return(
        <>
            <button onClick={() =>{
                AuthDados.setUsuario({usuario:'Ana',perfil:'user'})
            }}>Login</button>
        </>
    )
}