import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Main from "../main";

import CryptoCurrencyService from "../../services/CryptoCurrencyService";

function App(){
   const {getCryptoCurrencies,...rest} = new CryptoCurrencyService;
    return (
      <Router>
          <Main getData={getCryptoCurrencies} {...rest}/>
      </Router>
    );
}
export default App;
// create HOC for spinner and for service
