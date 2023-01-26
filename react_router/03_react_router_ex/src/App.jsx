import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Empresa from "./Components/Empresa";
import Lojas from "./Components/Lojas";
import Lisboa from "./Components/Lisboa";
import Porto from "./Components/Porto";
import Coimbra from "./Components/Coimbra";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="container-fluid mb-3">
          <div className="row text-center p-3 bg-secondary">
            <div className="col">
              <Link className="text-white" to="/">Empresa</Link>
            </div>
            <div className="col">
              <Link className="text-white" to="/lojas">Lojas</Link>
            </div>
            <div className="col">
              <Link className="text-white" to="lojas/lisboa">Lisboa</Link>
            </div>
            <div className="col">
              <Link className="text-white" to="lojas/porto">Porto</Link>
            </div>
            <div className="col">
              <Link className="text-white" to="lojas/coimbra">Coimbra</Link>
            </div>
          </div>
        </nav>


        <Routes>
          <Route path="/" element={<Empresa />} />
          <Route path="/lojas/*" element={<><Lojas /><Outlet /></>} >
            <Route path="lisboa" element={<Lisboa />} />
            <Route path="porto" element={<Porto />} />
            <Route path="coimbra" element={<Coimbra />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

