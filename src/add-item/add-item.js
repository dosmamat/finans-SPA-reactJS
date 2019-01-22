import React, { Component } from 'react';
import './add-item.css';

class Add extends Component {
  state={
    labelName:"",
    labelSum:""
  }
  onLabelNameChange=(e)=>{
    this.setState({
      labelName:e.target.value
    })
  }
  onLabelSumChange=(e)=>{
    this.setState({
      labelSum:e.target.value
    })
  }
  onSubmitMinus=(e)=>{
    e.preventDefault();
    if(this.state.labelName!=='' && this.state.labelSum!==''){
      this.props.onAdd(this.state.labelName,this.state.labelSum,"minus");
      this.setState({
        labelName:"",
        labelSum:""
      })
    }
    else{
      console.log("inputs empty");
    }
  }
  onSubmitPlus=(e)=>{
    e.preventDefault();
    if(this.state.labelName!=='' && this.state.labelSum!==''){
      this.props.onAdd(this.state.labelName,this.state.labelSum,"plus");
      this.setState({
        labelName:"",
        labelSum:""
      })
    }
    else{
      console.log("inputs empty");
    }
  }
  render() {
    return (
      <form className='form'   >
        <input value={this.state.labelName} required onChange={this.onLabelNameChange} className="nameEvent" type="text" placeholder="Name"/>
        <input value={this.state.labelSum} required onChange={this.onLabelSumChange} className="summaEvent" type="number" placeholder="Summa"/>
        <button onClick={this.onSubmitPlus} className="inc">+</button>
        <button onClick={this.onSubmitMinus} className="dec">-</button>
      </form>
    );
  }
}

export default Add;