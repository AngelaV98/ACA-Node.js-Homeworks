import React, { Component } from "react";
import search from "../../assets/search.png";

import "./Search.css";

class Search extends Component {
  state = {
    text: ""
  };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ text: e.target.value });
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <div className="Search">
        <img className="Search-icon" src={search} alt="Search" />
        <input
          type="text"
          className="Search-panel"
          placeholder="Currency Name"
          autoFocus
          onChange={this.onChange}
          value={this.state.text}
        />
      </div>
    );
  }
}


export default Search;