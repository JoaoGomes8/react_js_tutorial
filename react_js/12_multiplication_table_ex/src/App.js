import React,{useState} from 'react';

export default function App() {

  const[num1,setNum1] = useState(0)


// setNumeros([1,2,3])

const multiplicar = () =>{
  if (isNaN(num1)) {
    return[]
  } else {

    let produtos = []
    for (let i = 1; i <= 10; i++) {
      produtos.push(`${num1} x ${i} = ${num1 * i}`)
    }
    return produtos
  }
}

  return (
    <>
      <h1>React - Tabuada</h1>
      <hr />
      <input type="number" onChange={(e) => setNum1(parseInt(e.target.value))} />
      <p>{multiplicar().map(item => <p>{item}</p> )}</p>
    </>
  )
}

