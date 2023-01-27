import React, { useState } from 'react';
import './App.css'

  const TabelaIMC = () => {
      return (
        <table border={1}  style={{borderCollapse:'collapse', color:'white'}}>
           <thead>
            <tr>
              <th>
                  Classificação
              </th>
              <th>
                  IMC
              </th>
            </tr>
           </thead>
           <tbody>
               <tr>
                 <td className='TD'> Abaixo do Peso    </td>
                 <td className='TD'> Abaixo de 18,5</td>
               </tr>
               <tr>
                 <td className='TD'> Peso normal    </td>
                 <td className='TD'> entre 18,5 e 24,9</td>
               </tr>
               <tr>
                 <td className='TD'> SobrePeso   </td>
                 <td className='TD'> entre 25 e 29,9</td>
               </tr>
               <tr>
                 <td className='TD'> Obesidade grau 1   </td>
                 <td className='TD'> entre 30 e 34,9</td>
               </tr>
               <tr>
                 <td className='TD'> Obesidade grau 2   </td>
                 <td className='TD'> entre 35 e 39,9</td>
               </tr>
               <tr>
                 <td className='TD'> Obesidade grau 3   </td>
                 <td className='TD'> maior que 40 </td>
               </tr>
           </tbody>
        </table>
      )
  }

  

   const fpeso = (p,sp) => {
      return(
       <div >
            <label className='div'>Digite seu peso:</label>
            <input type="text" value={p}  onChange={(e)=>sp(e.target.value)}  />
       </div>

      )
   }



   const faltura = (a,sa) => {
    return(
     <div>
          <label className='div' >Digite sua altura:</label>
          <input type="text" value={a}  onChange={(e)=>sa(e.target.value)}  />
     </div>

    )
 }



    const fcalcular = (p,a,sr) => {
       const calc = () => {
        sr(p/(a*a))

       }
       return(
        <div>
          <button className='botao' onClick={calc}>Calcular</button>
        </div>
       )
    }

    const fresultado = (r) => {
      return(
      
        <div>
          <p className='p'>resultado: {r.toFixed(2)}</p>
        </div>
      )
    }


const App = () => {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')

  return (
     <div className='App'>
       <br />
      {fpeso(peso,setPeso)} <br />
      {faltura(altura,setAltura)}
      {fcalcular(peso,altura,setResultado)}
      {fresultado(resultado)}
      {TabelaIMC()}

     </div>
     
   );
}
 
export default App;