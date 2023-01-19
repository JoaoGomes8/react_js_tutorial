import React,{useState, useRef} from 'react';

export default function App() {

  // STATE
  const [listaTarefas, setlistaTarefas] = useState(() => {
    return []
  })
  const [tarefa, setTarefa] = useState(() =>{
    return ''
  })

  // REF
  const idTarefa = useRef(0)
  const inputRef = useRef()

  // METODOS
  function adicionarTarefa() {
    setlistaTarefas(old => {return [...old, {id: idTarefa.current, texto: tarefa}]})
    idTarefa.current++
    setTarefa('')
    inputRef.current.focus();
  }

  function limparTarefas() {
    setlistaTarefas(old =>{
      return []
    })
    idTarefa.current = 0
  }

  function removerTarefa(id) {
    const tmp = listaTarefas.filter(tarefa =>{
      return tarefa.id !== id
    })
    setlistaTarefas(tmp)
    
  }

  return (
    <>
      <h1>GESTOR DE TAREFAS</h1>
      <hr />
      <input ref={inputRef} type="text" value={tarefa} onChange={evento => setTarefa(evento.target.value)} />
      <div>
        <button onClick={adicionarTarefa}  >Adicionar</button>
        <button onClick={limparTarefas}>Limpar tudo</button>
      </div>
      <hr />
      <p>Tarefas:  </p>
      {listaTarefas.map(t =>{
        return <p key={t.id}>{t.texto} <span onClick={() =>{ removerTarefa(t.id)}}> - [Remover]</span></p>  
          
      })}
    </>
  )
}

