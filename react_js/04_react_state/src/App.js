import React, {useState} from 'react';

export default function App() {

  const [valor, setValor] = useState(() =>{
    return 5000
  });


  function diminuir() {
    setValor(valor_antigo => valor_antigo -1)
    setValor(valor_antigo => valor_antigo -1)
  }
  function aumentar() {
    setValor(valor_antigo => valor_antigo +1)
    setValor(valor_antigo => valor_antigo +1)
  }


  // -------------------------------------------------------

  const[nome, setNome]=useState(() =>{
    return 'Joao';
  })

  function alterar() {
    setNome(a => {
      return 'joaquim'
    })
  }

  // -------------------------------------------------------

  // const [player, setPlayer] = useState({
  //   name: "Joao",
  //   score: 0
  // })


  // function alterar2() {
  //   setPlayer(pa => {
  //     return {
  //       ...pa,
  //       score: pa.score +1,
  //     }
  //   })
  // }


  const [playerName, setPlayerName] = useState(() => {
    return "Joao"
  })
  const [playerScore, setPlayerScore] = useState(() => {
    return 0
  })


  function alterar3() {
    setPlayerScore(sc_anterior => {
      return sc_anterior +1
    })
  }






  return (
    <>
      <h1>React Hooks - useState</h1>
      <button onClick={diminuir}>Diminuir</button>
      <span>{valor}</span>
      <button onClick={aumentar}>Aumentar</button>

      <hr />
      
      <h3>Nome: {nome}</h3>
      <button onClick={alterar}>Alterar</button>

      <hr />
      
      {/* <h3>Nome: {player.name}</h3>
      <h3>Pontos: {player.score}</h3>
      <button onClick={alterar2}>Alterar a pontuação</button> */}
      
      <h3>Nome: {playerName}</h3>
      <h3>Pontos: {playerScore}</h3>
      <button onClick={alterar3}>Alterar a pontuação</button>


      
    </>
  );
}

