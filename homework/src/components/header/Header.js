import React from "react";

import "./Header.css";
import logo from "../../assets/logo.png";

import Search from "../search/";
import Select from "../select/";

import { Link } from "react-router-dom";

function Header({ onChange, perPage, onPerPageChange }) {
  return (
    <header className="Header">
      <Link to="/">
        <img src={logo} className="Header-logo" alt="Logo" />
      </Link>
      <Search onChange={onChange} />
      <Select onPerPageChange={onPerPageChange} perPage={perPage} />
    </header>
  );
}

export default Header;