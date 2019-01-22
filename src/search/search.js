import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  state=({
    term:''
  })
  onSearch=(e)=>{
    const term=e.target.value;
    this.setState({term});
    this.props.onSearch(term);
  }

  render() {
    return (
      <div className="form-search">
          <input value={this.state.term} onChange={this.onSearch} type="text" placeholder="search"/>
          <div>
              <button onClick={this.props.sortDown} >Убывание</button>
              <button onClick={this.props.sortUp}>Возрастание</button>
          </div>
      </div>
    );
  }
}

export default Search;