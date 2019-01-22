import React, { Component } from 'react';
import './App.css';
import Add from '../add-item/add-item';
import Items from '../items/items';
import Search from '../search/search';
import Total from '../total/total';

class App extends Component {
 
  maxId=99;
  state={
    events:[
      {id:0, name:"Купил шаурму", summa:200, type:"minus"},
      {id:1, name:"Продал часы", summa:600, type:"plus"},
      {id:2, name:"Продал дошик", summa:100, type:"plus"}
    ],
    totalMinus:0,
    totalPlus:0,
    term:''
  }

  addEvent=(name,summa,type)=>{
    const newItem={
      id:this.maxId++,
      name:name,
      summa:summa,
      type:type
    }

    this.setState(({events})=>{
      const newArr=[
        ...events,
        newItem
      ];
      return{
        events:newArr
      }
    });
    this.totalist();
   
  }
  deletEvent=(id)=>{
    this.setState(({events})=>{
      const idx=events.findIndex((el)=>el.id===id);
      const before=events.slice(0, idx);
      const after = events.slice(idx+1);
      const newArray=[...before, ...after];
      return{
        events:newArray
      }
    })
    // console.log("delete"+id);
    this.totalist();
  }
  totalist(){ // считает с опазданием
    let plus=0, minus=0;
        this.state.events.map((item)=>{
          let {summa, type}=item;
          summa++;
          summa--;
          if(type==="plus")
          {
           
            plus+=summa
          }
          else
          {

            minus+=summa
          }
          return true
        })
     return {totalMinus:minus, totalPlus:plus}   
  }
  search(items, term){
    if(term.length===0){
      return items;
    }
    return items.filter((item)=>{
      return item.name.toLowerCase().indexOf(term.toLowerCase())>-1;
    })
  }
  onSearch=(term)=>{
    this.setState({term});
  }
  sortSummUp=(eA, eB)=>{
    return eA.summa-eB.summa;
  }
  sortSummDown=(eA, eB)=>{
    return eB.summa-eA.summa;
  }
  onSort=()=>{
    this.setState(({events})=>{
      let bufArr=[...events];
      bufArr.sort(this.sortSummUp);
      return{
        events:bufArr
      }
    })
  }
  onSortDown=()=>{
    this.setState(({events})=>{
      let bufArr=[...events];
      bufArr.sort(this.sortSummDown);
      return{
        events:bufArr
      }
    })
  }
  render() {
    const {events,term}=this.state;
    const visible=this.search(events, term);
    const {totalMinus, totalPlus}=this.totalist();
    return (
      <div className='container' >
        <Add onAdd={this.addEvent}/>
        <Items events={visible} onDel={this.deletEvent}/>
        <Search onSearch={this.onSearch} sortUp={this.onSort} sortDown={this.onSortDown} />
        <Total minus={totalMinus} plus={totalPlus} />
      </div>
    );
  }
}

export default App;
