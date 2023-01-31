import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function App() {

  const [produtos, setProdutos] = useState({})

  useEffect(() =>{
    axios.get('https://dummyjson.com/products')
    .then((res) => {
      setProdutos(res.data.products);
    })
  },[])

  return (
    <>
      <h1>React axios</h1>
      <hr />
      <ul>
        {Object.keys(produtos).map((key) => {
          return(
            <li key={produtos[key].id}>{produtos[key].title}</li>
          )
        })}
      </ul>
    </>
  )
}

