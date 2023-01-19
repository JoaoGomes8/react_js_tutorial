import React,{useState, useEffect, useRef} from 'react';

export default function App() {

  const [texto,setTexto] = useState('');
  const inputRef = useRef();
  const inputRef2 = useRef();

  const [texto2,setTexto2] = useState('');
  const anterior = useRef('');

  
  function alterar_texto() {
    inputRef.current.value = 'João Gomes';
  }
  
  function executar() {
    console.log(inputRef2.current.value);
    setTexto(inputRef2.current.value);
  }


  useEffect(() =>{
    anterior.current = texto2
  },[texto2])

 
  return (
    <>
      <h1>React Hooks - useRef</h1>
      <hr />

      <input ref={inputRef} type="text" />
      <button onClick={alterar_texto}>Alterar o texto do input</button>

      <hr />

      <input ref={inputRef2} type="text" onChange={e => setTexto(e.target.value)} />
      <button onClick={executar}>Executar</button>
      <p>Texto: {texto}</p>

      <hr />
      
      <input type="text" onChange={e2 => setTexto2(e2.target.value)} />
      <p>Texto: {texto2} (anteriormente) {anterior.current}</p>

      
      
    </>
  )
}

