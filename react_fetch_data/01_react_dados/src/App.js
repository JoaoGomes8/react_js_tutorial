import React from "react";
import { useEffect } from "react";

export default function App() {

  useEffect(() =>{
    fetch('http://localhost:3000/dados/texto.txt')
    .then((res) => res.text())
    .then((texto) => console.log(texto))
  },[])

  return (
    <>
      <h1>React Fetch Data</h1>
    </>
  )
}

