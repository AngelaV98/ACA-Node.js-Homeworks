import React from "react";
import PropTypes from "prop-types";
import "./Table.css";

function Table({
  list = [],
  fields = [],
  classList = "Table",
  errorMessage = null,
  history
}) {
  if (!list.length) {
    const errMsg = (errorMessage && errorMessage()) || <h3>No items found</h3>;
    return errMsg;
  }
  return (
    <div className="Table-container">
      <table className={classList}>
        <thead className="Table-head">
          <tr>
            {fields.map(
              ({ label }) => label !== "Id" && <th key={label}>{label}</th>
            )}
          </tr>
        </thead>
        <tbody className="Table-body">
          {list.map(({ id, ...row }) => (
            <tr key={id} onClick={() => history.push(`/currency/${id}`)}>
              {fields.map(({ label, field }) => {
                const rowField = row[field];
                return label !== "Id" && <td key={rowField}>{rowField}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
Table.propTypes = {
  list: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  classList: PropTypes.string,
  errorMessage: PropTypes.func
};
export default Table;