import React from 'react';


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
     );
}
 
export default TabelaIMC;