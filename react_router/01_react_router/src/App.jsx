import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import { useState } from "react";
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import About from "./components/About";
import AreaReservada from "./components/AreaReservada";

export default function App() {

  const [logado] = useState(false);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services/*" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about/:id/:teste" element={<About />} />
        
        <Route path="/area_reservada" element={ logado? <AreaReservada /> : <Navigate to="/" />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}


