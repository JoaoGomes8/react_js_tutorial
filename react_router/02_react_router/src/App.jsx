import React from "react"
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <h1>React Router</h1>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/servicos" element={<h1>Servicos</h1>} />
          <Route path="/contactos/*" element={<><h1>Contactos</h1> <Outlet /></>}>
            <Route path="localizacao" element={<h1>Localizacao</h1>} />
            <Route path="telefone" element={<h1>Telefone</h1>} />
            <Route path="email" element={<h1>Email</h1>} />
            <Route path="*" element={<h1>ERRO!!!</h1>} />
          </Route>
          <Route path="/*" element={<h1>ERRO!!!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

