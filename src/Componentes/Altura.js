import React from 'react';


export default class Altura extends React.Component {
     constructor(){
          super()
     }
render(){
    return ( 
          <div>
               <label className='div' >Digite sua altura:</label>
               <input type="text" value={this.props.a}  onChange={(e)=>this.props.sa(e.target.value)}  />
          </div> 
          
   );
}
}
 
