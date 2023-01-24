import React,{useState, useRef, useEffect} from 'react';
import './App.css'
import Contacto from './components/Contacto';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

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
      <div className='container-fluid titulo'>
        <div className='row'>
          <div className="col text-center">
            <h4 className='text-center' >LISTA DE CONTACTOS</h4>
          </div>
        </div>
      </div>

      <div className="container-fluid formulario">
        <div className="row">
          <div className="col p-3">
            <div className="row justify-content-center">
              <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                <div className='mb-3'>
                  <label className="form-label" htmlFor="">Nome</label><br />
                  <input ref={inputNome} type="text" onChange={definirNome} value={contacto.nome} className="form-control" />
                </div>
                <div>
                  <label className='form-label' htmlFor="">Telefone</label><br />
                  <input ref={inputTelefone} type="number" onChange={definirTelefone} value={contacto.telefone} onKeyUp={teste} className="form-control" />
                </div>
                <div className="row mt-3">
                  <div className="col text-start">
                    <button onClick={adicionarContacto} className='btn btn-outline-info'>Adicionar</button>
                  </div>
                  <div className="col text-end">
                    <button onClick={limparStorage} className='btn btn-outline-warning'>Limpar Lista</button>
                  </div>
                </div>
              </div>    
            </div>
            
            
            
          </div>
        </div>
      </div>

      
      

      {/* Apresentação da lista de contactos */}
      {listaContactos.map(ct => {
        return <Contacto key={ct.id} id={ct.id} nome={ct.nome} telefone={ct.telefone} remover={removerContacto} />
      })}
      

      
    </>
  )
}


