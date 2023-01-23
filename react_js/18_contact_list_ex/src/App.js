import React,{useState, useRef, useEffect} from 'react';
import Contacto from './components/Contacto';
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  // states
  const [contacto,setContacto] = useState({id:'', nome:'', telefone:''});
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
    setListaContactos([...listaContactos,{id:uuidv4(),...contacto}])

    // limpar o contacto
    setContacto({nome:'', telefone:''})

    // colocar focus no input do nome
    inputNome.current.focus();


      
   

  }
  function teste(event) {
    if (event.code === "Enter") {
      adicionarContacto();
    }
  }

  // remover 1 contacto da lista
  function removerContacto(id) {
    let tmp = listaContactos.filter(ct => ct.id !== id)
    setListaContactos(tmp)
  }

  // limpar toda a lista
  function limparStorage() {
    setListaContactos([])
  }
  // carregar listaContactos do localStorage
  useEffect(() =>{
    if (localStorage.getItem('meus_contactos') !== null) {
      setListaContactos(JSON.parse(localStorage.getItem('meus_contactos')))
    } 
  },[])
  // persistência do state
  // atualizar a lista de contactos no localstorage
  useEffect(() =>{
    localStorage.setItem('meus_contactos', JSON.stringify(listaContactos))
  },[listaContactos])
  

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
        <input ref={inputTelefone} type="number" onChange={definirTelefone} value={contacto.telefone} onKeyUp={teste} />
      </div>
      <hr />
      <button onClick={adicionarContacto}>Adicionar Contacto</button>
      <button onClick={limparStorage}>Limpar Lista</button>
      <hr />

      {/* Apresentação da lista de contactos */}
      {listaContactos.map(ct => {
        return <Contacto key={ct.id} id={ct.id} nome={ct.nome} telefone={ct.telefone} remover={removerContacto} />
      })}
      

      
    </>
  )
}


