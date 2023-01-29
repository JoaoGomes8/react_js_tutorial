import React from "react"
import Userbar from "./components/Userbar"
import { useState } from "react"

export default function App() {

  const [usuario, setUsuario] = useState('Joao')

  return (
    <>
      <h3>REACT PROP-DRILLING</h3>
      <Userbar usuario={usuario} login={setUsuario} />
    </>
  )
}
