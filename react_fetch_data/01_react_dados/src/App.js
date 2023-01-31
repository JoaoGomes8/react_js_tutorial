import React from "react";
import { useEffect,useState } from "react";

export default function App() {

  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
    idade: 0
  })

  useEffect(() =>{
    fetch('http://localhost:3000/dados/dados.json')
    .then((res) => res.json())
    .then((dados_cliente) => {
      setCliente(dados_cliente)
    })

    console.log('teste');
  },[])

  return (
    <>
      <h1>React Fetch Data</h1>
      <hr />
      <p>Nome do cliente: {cliente.nome}</p>
      <p>Email do cliente: {cliente.email}</p>
      <p>Idade do cliente: {cliente.idade}</p>
    </>
  )
}

