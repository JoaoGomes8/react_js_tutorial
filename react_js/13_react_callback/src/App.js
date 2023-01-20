import React,{useState, useCallback} from "react"
import "./estilos.css"
import Lista from "./components/Lista";

export default function App() {

  const [numero,setNumero] = useState(100);
  const [temaEscuro,setTemaEscuro] = useState(false);

  // função para calcular lista de resultados
  const resultados = useCallback(() =>{
    return [numero*2,numero*3,numero*4]
  },[numero])
  

  // tema da app
  const tema = {
    backgroundColor: temaEscuro ? "black" : "white",
    color: temaEscuro ? "white" : "black",
    height: "100vh"

  }
  

  return (
    <div style={tema}>
      <h1>React Hook - useCallback</h1>
      <hr />
      <button onClick={() => setTemaEscuro(old => !old)}>Alterar Tema</button>
      <p>Número: {numero}</p>
      <button onClick={() => setNumero(old => old +1)}>Incrementar</button>
      <hr />
      <Lista resultados={resultados} />
    </div>
  )
}

