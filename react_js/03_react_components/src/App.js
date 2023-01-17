import React from 'react';
import './App.css'
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component6 from './components/Component6';
import Component7 from './components/Component7';
import Component8 from './components/Component8';
import Component9 from './components/Component9';

function App() {
    return(
        <>
            <Component1 />
            <Component2 />
            <Component3 title="teste" subtitle="Texto do componente 3" />
            <Component4 title="Componente 4" />
            <Component6 title="Componente 6" />
            <Component7 title="Componente 7" value={true} />
            <Component8 title="Componente 8" value={10} nameTest={"joaquim"} />
            <Component9 title="Componente 9" value="joao"/>
        </>
    )
}

export default App