import React, { Component } from "react";
import PropTypes from "prop-types";

import Page from "./Page";
import managePagination from "./managePagination";

import "./Pagination.css";
class Pagination extends Component {
  render() {
    const {
      pageNumber,
      classList = "Pagination",
      onPageChange,
      onPrevChange,
      onNextChange,
      currentPage
    } = this.props;

    let pages = managePagination(currentPage, pageNumber);

    return (
      <ul className={classList}>
        {currentPage !== 1 && (
          <Page label="Previous" onPrevChange={onPrevChange} />
        )}
        {pages.map((item, i) => {
          if (currentPage === item) {
            return (
              <Page
                label={item}
                key={item}
                isActive
                onPageChange={onPageChange}
              />
            );
          }
          return <Page label={item} key={item} onPageChange={onPageChange} />;
        })}
        {currentPage !== pageNumber && (
          <Page label="Next" onNextChange={onNextChange} />
        )}
      </ul>
    );
  }
}
Pagination.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  classList: PropTypes.string,
  onPageChange: PropTypes.func.isRequired,
  onPrevChange: PropTypes.func.isRequired,
  onNextChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};
export default Pagination;