import React, { Component } from "react";
import "./Select.css";

class Select extends Component {
  onPerPageChange = e => {
    this.props.onPerPageChange(e.target.value);
  };

  render() {
    return (
      <div className="Select">
        <select
          value={this.props.perPage}
          onChange={this.onPerPageChange}
          className="form-control"
        >
          <option>2</option>
          <option>5</option>
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
      </div>
    );
  }
}


export default Select;