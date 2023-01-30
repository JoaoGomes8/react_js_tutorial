import React from 'react';
import Usuario from './components/Usuario';
import Cliente from './components/Cliente';

// providers
import { UsuarioProvider } from './contexts/UsuarioContext';
import { ClienteProvider } from './contexts/ClienteContext';

export default function App() {
  return (
    <>
      <h3>React Múltiplos Context APIs</h3>
      
      <UsuarioProvider>
        <Usuario />
      </UsuarioProvider>
      <ClienteProvider>
        <Cliente />
      </ClienteProvider>
    </>
  )
}

