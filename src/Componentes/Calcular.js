import React from 'react';

const Calcular = (props) => {
    const calc = () => {
        props.sr(props.p/(props.a*props.a))

       }
    return ( 

            <div>
              <button className='botao' onClick={calc}>Calcular</button>
            </div>

     );
}
 
export default Calcular;