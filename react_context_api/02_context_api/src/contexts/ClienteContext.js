import { createContext } from "react";

const ClienteContext = createContext()


export function ClienteProvider({children}){

    // dados do cliente
    const dados_cliente = {
        nome:'antónio',
        email:'antonio@gmail.com'
    }

    return(
        <ClienteContext.Provider value={dados_cliente}>
            {children}
        </ClienteContext.Provider>
    )
}

export default ClienteContext