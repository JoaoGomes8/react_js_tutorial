import React,{useState} from "react";

export default function App() {

  const [escuro, setEscuro] = useState(false)

  const tema = {
    backgroundColor: escuro ? "black" : "white", 
    color: escuro ? "white" : "black"
  }

  function mudarTema() {
    setEscuro(old => !old)
  }

  return (
    <div style={tema}>
      <h1>React- Tema Claro / Escuro</h1>
      <hr />
      <button onClick={mudarTema}>Tema</button>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates qui est sit velit non eos ipsum? Error, perspiciatis? Sapiente architecto accusamus nostrum nesciunt laborum. At quidem iste alias quis maiores.
      Perferendis et, eaque fugit, aliquam hic incidunt, eos accusamus nostrum iusto placeat atque suscipit voluptate consectetur facilis quibusdam doloremque commodi dolorum inventore maiores quidem quis magnam similique. Adipisci, harum eum.
      Animi harum fugit sunt nisi optio nostrum enim cum, ut, porro doloremque nobis sit, esse laudantium repellendus magnam mollitia? Nostrum quasi velit architecto saepe autem placeat ex error nam aperiam.
      Dolore porro ut assumenda, quis nihil soluta! Repudiandae consequuntur aspernatur fugit voluptate? Adipisci, veritatis similique rerum facere molestiae quae velit nemo ut consequuntur deserunt minima vitae nesciunt nihil delectus est.
      Eveniet recusandae modi eaque accusamus corporis quidem ut suscipit officia quia. Nobis, labore explicabo qui at obcaecati dolores nesciunt veniam provident voluptatibus molestiae tenetur ipsa facilis, dolorum cumque distinctio odio!
      Sunt aperiam velit ducimus voluptas tenetur suscipit ab dolore debitis maiores perferendis totam natus maxime nihil laboriosam dolorem sint ad ullam sed quis, ratione illum vero commodi dolorum voluptatem. Dignissimos?
      Ipsum esse rerum delectus aut ab perferendis assumenda autem maiores eligendi, provident, quae quo consequuntur quibusdam, unde vel cumque. Omnis, accusamus ab. Quod vitae omnis asperiores qui exercitationem, ullam mollitia!
      Veniam, eum! Laborum porro molestias numquam, placeat eum ad quae incidunt facilis, eligendi assumenda natus veritatis fuga dignissimos accusantium officiis vero minima esse ullam obcaecati perspiciatis in aliquam? Reiciendis, tenetur?
      Molestias corrupti a laboriosam quaerat sequi veniam minus odio sed fuga consequatur hic vitae sit aperiam ipsa nam ea commodi labore, porro, optio voluptatibus rem fugit molestiae nobis? Molestiae, nemo!
      Ipsum iusto excepturi in a vel. Hic exercitationem obcaecati sed illo non iste facilis, suscipit, repellendus quisquam molestiae repudiandae quos doloribus accusamus soluta, velit incidunt odio ad tenetur? Praesentium, minus.</p>
    </div>
  )
}

