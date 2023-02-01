import React from 'react';


export default class Resultado extends React.Component{
  constructor() {
    super()
  }
  render(){
    return (
        <div>
        <p className='p'>resultado: {this.props.r}</p>
      </div>
      );
    }
}
 
