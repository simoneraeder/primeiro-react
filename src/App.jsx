import {useState} from "react";
import {Contador} from "./components/Contador/Contador";
import {ContadorStateless} from "./components/ContadorStateless/ContadorStateless";


function App() {
  const [contador, setContador] = useState(1);
  const [nome, setNome] = useState("");

  const adicionarContador = () => {
    setContador((prevState) => prevState +1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome:", nome);
  };

  return (

    <>
    <h1>{nome}</h1>
     <form onSubmit={handleSubmit}>
     <input
      value={nome}
     onChange={(e) => setNome(e.target.value)}
     type="text"
     />

 <button type="submit">atualizar estado</button>


     </form>
    <Contador/>
    <ContadorStateless
    contador={contador}
    adicionarContador={adicionarContador}
    />
    <ContadorStateless
    contador={contador}
    adicionarContador={adicionarContador}
    />
   <ContadorStateless
    contador={contador}
    adicionarContador={adicionarContador}
    />
    <ContadorStateless
    contador={contador}
    adicionarContador={adicionarContador}
    />
    </>
  )
}

export default App
