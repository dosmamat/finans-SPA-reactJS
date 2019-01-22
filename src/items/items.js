import React, { Component } from 'react';
import './items.css';

class Items extends Component {
  
  render() {
    const {events,onDel}=this.props;
    const elements=events.map((item)=>{
      const {name,summa,type,id}=item;
      return(
        <div key={id} className={`item  ${type}`}>
            <span>{name}</span>
            <span className="type">{summa} <button onClick={()=>onDel(id)}>X</button></span>
        </div>
      )
    });
    return (
      <div className="list-items">
         {elements}
      </div>
    );
  }
}

export default Items;