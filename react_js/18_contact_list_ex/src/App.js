import React,{useState, useRef} from 'react';
import Contacto from './components/Contacto';
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  // states
  const [contacto,setContacto] = useState({nome:'', telefone:''});
  const [listaContactos,setListaContactos] = useState([]);

  // useRef
  const inputNome = useRef();
  const inputTelefone = useRef();

  // métodos
  function definirNome(event) {
    setContacto( {...contacto , nome: event.target.value})
  }
  function definirTelefone(event) {
    setContacto( {...contacto , telefone: event.target.value})
  }
  function adicionarContacto() {
    // validação dos campos
    if(contacto.nome === '' || contacto.telefone === '') return
    
    // verificar se o contacto já existe
    let duplicado = listaContactos.find((ct) => ct.nome === contacto.nome && ct.telefone === contacto.telefone)
    
    if(typeof duplicado !== 'undefined') {
      alert('Este contacto já existe')
      inputTelefone.current.focus();
      return
    }

    // adicionar novo contacto à lista
    setListaContactos([...listaContactos,contacto])

    // limpar o contacto
    setContacto({nome:'', telefone:''})

    // colocar focus no input do nome
    inputNome.current.focus();
      
   

  }

  return (
    <>
      <h1>Minha lista de contactos</h1>
      <hr />
      <div>
        <label htmlFor="">Nome:</label><br />
        <input ref={inputNome} type="text" onChange={definirNome} value={contacto.nome} />
      </div>
      <div>
        <label htmlFor="">Telefone:</label><br />
        <input ref={inputTelefone} type="number" onChange={definirTelefone} value={contacto.telefone} />
      </div>
      <hr />
      <button onClick={adicionarContacto}>Adicionar Contacto</button>
      <hr />

      {/* Apresentação da lista de contactos */}
      {listaContactos.map(ct => {
        return <Contacto  nome={ct.nome} telefone={ct.telefone} key={uuidv4()} />
      })}
      

      
    </>
  )
}


