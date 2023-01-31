import React from 'react';


const Peso = (props) => {
    return ( 
    <div >
        <label className='div'>Digite seu peso:</label>
        <input type="text" value={props.p}  onChange={(e)=>props.sp(e.target.value)}  />
    </div>

      );
}
 
export default Peso;