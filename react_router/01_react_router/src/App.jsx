import React from "react";
import {Routes, Route, Link} from "react-router-dom";
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// Components
import Home from "./components/Home";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import About from "./components/About";

export default function App() {
  return (
    <>
      <div className="container-fluid bg-dark text-white text-center">
        <div className="row">
          <div className="col">
            <h3>React Router App!</h3>
          </div>
        </div>
      </div>
      <nav className="container mt-3">
        <div className="row">
          <div className="col text-center">
          <Link className="btn btn-primary me-3" to="/">Home</Link>
          <Link className="btn btn-primary me-3" to="/services">Services</Link>
          <Link className="btn btn-primary me-3" to="/contacts">Contacts</Link>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}


