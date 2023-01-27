import React from "react";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Layout from "./Components/Layout";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

