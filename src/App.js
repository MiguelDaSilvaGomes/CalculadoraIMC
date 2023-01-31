import React, { useState } from 'react';
import './App.css'
import TabelaIMC from './Componentes/TabelaIMC'
import Peso from './Componentes/Peso'
import Altura from './Componentes/Altura'
import Calcular from './Componentes/Calcular';
import Resultado from './Componentes/Resultado'

const App = () => {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')

  return (
     <div className='App'>
       <br />
      <Peso p={peso} sp={setPeso}/> <br />
      <Altura a={altura} sa={setAltura}/>
      <Calcular p={peso} a={altura} sr={setResultado}/>
      <Resultado r={resultado}/>
      <TabelaIMC/>

     </div>
     
   );
}
 
export default App;