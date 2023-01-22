import React,{useState} from 'react';

export default function App() {

  const [valor, setValor] = useState(0)

  function decremento() {
    setValor(old => old-1)
  }
  function incremento() {
    setValor(old => old+1)
  }

  return (
    <>
      <h1>App no servidor</h1>
      <hr />
      <p>Valor: <strong>{valor}</strong></p>
      <button onClick={decremento}>Decremento</button>
      <button onClick={incremento}>Incremento</button>
    </>
  )
}

