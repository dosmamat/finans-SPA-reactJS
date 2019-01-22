import React, { Component } from 'react';
import './total.css';

class Total extends Component {
  
  render() {
    const {minus, plus}=this.props;
    return (
     <div className="total">
         <div> <h2 align="center">Итоги</h2></div>
         <div className="total-items">
             <div className="consumption"> -{minus}</div>
             <div className="coming"> +{plus}</div>
             <div className="summa">={plus-minus}</div>
         </div>
     </div>
    );
  }
}

export default Total;