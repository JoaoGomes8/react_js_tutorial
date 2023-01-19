import React, {useState, useEffect} from "react";
import User from "./components/User";
import './App.css';

export default function App(props){

  const [teste, setTeste] = useState(false);
  function teste2() {
    setTeste(!teste)
  }

  const [valor, setValor] = useState(100);
  const [valor2, setValor2] = useState(1000);

  function alterar() {
    setValor(valor + 10)
  }
  function alterar2() {
    setValor2(valor2 + 10)
  }
  
  useEffect(() =>{
    console.log('alterado');
  },[valor])


  // ----------------------------------------------------------------------

  const clientes = ['Joao', 'Ana', 'Carlos'];
  const produtos = ['Pão', 'Manteiga', 'Leite'];
  const vendas = ['1 x Pão (João)', '2 x Manteiga (Ana)', '3 x Leite (Carlos)'];

  const [info, setInfo] = useState('clientes');
  const [numero, setNumero] = useState(100);

  useEffect(() =>{
    console.clear();
    switch (info) {
      case 'clientes':
        console.table(clientes);
        break;
      case 'produtos':
        console.table(produtos);
        break;
      case 'vendas':
        console.table(vendas);
        break;
      default:
        break;
    }
  },[info])

  useEffect(() => {
    console.log('teste');
  },[numero])
  
  // -------------------------------------------------------------------
  // Uso do useEffect com uma API

  // state
  const [users,setUsers] = useState([])


  // effect
  useEffect(() =>{
    fetch("https://dummyjson.com/users")
    .then(response => response.json())
    .then(data => {
      console.log(data.users)
      setUsers(data.users)
    })
  },[])




  if(teste == true){
    return(
      <>
        <button onClick={teste2}>Ir para exercicio da API</button>
        <hr />
        <h1>React Hooks - useEffect</h1>
        <h3>Valor: {valor}</h3>
        <button onClick={alterar}>Alterar</button>
        <h3>Valor2: {valor2}</h3>
        <button onClick={alterar2}>Alterar</button>
  
        <hr />
        <hr />
  
        <button onClick={() => setInfo('clientes')}>Clientes</button>
        <button onClick={() => setInfo('produtos')}>Produtos</button>
        <button onClick={() => setInfo('vendas')}>Vendas</button>
        <h3>{info}</h3>
        <h3>{numero}</h3>
        <button onClick={() => setNumero(numero +10)}>Aumentar</button>
  
  
  
  
  
      </>
    )
  }

  else {
    return(
      <>
        <button onClick={teste2}>Voltar</button>
        <hr />
        <h1>Exercicio da API</h1>
        {users.map(u =>{
          return <User key={u.id} usuario={u}/>
        })}
      </>
    )
  }
}

