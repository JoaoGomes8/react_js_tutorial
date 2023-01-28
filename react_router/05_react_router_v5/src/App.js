import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <BrowserRouter>

      <h1>React Rouer V5</h1>
      <Nav />

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/about/:id"><About /></Route>
        <Route path="/*"><h1>ERRO!!</h1></Route>
      </Switch>

      <hr />
      <h3>Footer</h3>


    </BrowserRouter>


  )
}

