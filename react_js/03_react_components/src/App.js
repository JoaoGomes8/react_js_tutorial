import React from 'react';
import './App.css'
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component6 from './components/Component6';

function App() {
    return(
        <>
            <Component1 />
            <Component2 />
            <Component3 title="teste" subtitle="Texto do componente 3" />
            <Component4 title="Componente 4" />
            <Component6 title="Componente 6" />
        </>
    )
}

export default App