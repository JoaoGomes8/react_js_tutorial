import React from "react";
import Comment from "./components/Comment";

function App() {

    return(
        <>
            <h1>App</h1>
            <Comment title="Comentário um" author="João Ribeiro" />
            <Comment title="Comentário dois" author="Ana Silva" />
            <Comment title="Comentário três" author="Carlos Alberto" />
        </>
        
    )
}

export default App