import {useState} from "react";
import {Contador} from "./components/Contador/Contador";
import {ContadorStateless} from "./components/ContadorStateless/ContadorStateless";


function App() {
  const [contador, setContador] = useState(1);

  const adicionarContador = () => {
    setContador((prevState) => prevState +1);
  };
  return (
    <>
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
