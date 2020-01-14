import React, { Component } from "react";
import PropTypes from "prop-types";

class Page extends Component {
  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
    this.onPrevChange = this.onPrevChange.bind(this);
    this.onNextChange = this.onNextChange.bind(this);
  }
  onPageChange(e) {
    const currentPage = e.target.textContent;
    this.props.onPageChange(currentPage);
  }
  onPrevChange() {
    this.props.onPrevChange();
  }
  onNextChange() {
    this.props.onNextChange();
  }
  render() {
    const { label, isActive } = this.props;
    return (
      <li
        className={`page-item ${(isActive && "active") || ""}`}
        onClick={
          label === "Previous"
            ? this.onPrevChange
            : label === "Next"
            ? this.onNextChange
            : this.onPageChange
        }
      >
        <span className="page-link">{label}</span>
      </li>
    );
  }
}
Page.propTypes = {
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onPageChange: PropTypes.func,
  onPrevChange: PropTypes.func,
  onNextChange: PropTypes.func
};
export default Page;