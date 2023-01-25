import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Contacts from "./components/Contacts";

export default function App() {
  return (
    <>
      <h1>React Router App!</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route caseSensitive={true} path="/Services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}


