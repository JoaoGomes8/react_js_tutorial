import { createContext } from "react";  

const AuthContext = createContext()

export function AuthProvider({children}){

    // dados globais do context
    const AuthDados = {
        usuario:'joao',
        perfil:'admin'
    }

    return(
        <AuthContext.Provider value={AuthDados}>
            {children}
        </AuthContext.Provider>
    )
}





export default AuthContext