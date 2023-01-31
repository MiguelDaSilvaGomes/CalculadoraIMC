import React from 'react';


const Altura = (props) => {
    return ( 
   <div>
        <label className='div' >Digite sua altura:</label>
        <input type="text" value={props.a}  onChange={(e)=>props.sa(e.target.value)}  />
   </div> 
   
   );
}
 
export default Altura;