import { createContext } from "react";  
import { useState } from "react";

const AuthContext = createContext()

export function AuthProvider({children}){

    // dados globais do context
    // const AuthDados = {
    //     usuario:'joao',
    //     perfil:'admin'
    // }
    const [usuario, setUsuario] = useState({
        usuario:'joao',
        perfil:'admin'
    })

    return(
        <AuthContext.Provider value={{usuario, setUsuario}}>
            {children}
        </AuthContext.Provider>
    )
}





export default AuthContext