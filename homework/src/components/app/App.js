import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CryptoCurrencyService from "../../services/CryptoCurrencyService";

import Table from "../table/";
import Header from "../header/";
import Loading from "../loading/";
import Pagination from "../pagination";
import CurrencyItem from "../currency-item";
import NotFound from "../not-found";
import ErrorBoundary from "../error-boundary";
import "./App.css";

class App extends Component {
  cryptoCurrencyService = new CryptoCurrencyService();
  state = {
    currencies: [],
    search: [],
    loading: true,
    currentPage: 1,
    perPage: 5,
    totalPages: 5
  };
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.perPage !== this.state.perPage
    ) {
      this.getData();
    }
  }
  getData() {
    const { currentPage, perPage } = this.state;
    this.cryptoCurrencyService
      .getCryptoCurrencies(currentPage, perPage)
      .then(({ data: { currencies, totalPages } }) => {
        this.setState({
          currencies,
          totalPages,
          search: currencies,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ hasError: true, loading: false });
      });
  }

  handlePageChange = currentPage => {
    this.setState({ currentPage });
  };
  handlePrevChange = () => {
    const currentPage = this.state.currentPage;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };
  handleNextChange = () => {
    const { currentPage, totalPages } = this.state;
    if (currentPage < totalPages) {
      this.setState(({ currentPage }) => ({ currentPage: +currentPage + 1 }));
    }
  };
  handlePerPageChange = perPage => {
    this.setState({ perPage, currentPage: 1 });
  };
  handleChange = (text = "") => {
    const { currencies } = this.state;
    if (text === "") {
      this.setState({ search: currencies });
      return;
    }
    const newCurrencies = currencies.filter(({ name }) =>
      name.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ search: newCurrencies });
  };
  render() {
    const {
      search,
      totalPages,
      loading,
      hasError,
      currentPage,
      perPage
    } = this.state;
    return (
      <Router>
        <div className="App">
          <Header
            onChange={this.handleChange}
            onPerPageChange={this.handlePerPageChange}
            perPage={perPage}
          />
          <Switch>
            <Route
              exact
              path={["/", "/home"]}
              render={props => {
                return loading ? (
                  <Loading />
                ) : (
                  <ErrorBoundary hasError={hasError}>
                    <Table
                      list={search}
                      fields={[
                        { label: "Id", field: "id" },
                        { label: "Cryptocurrency", field: "name" },
                        { label: "Price", field: "price" },
                        { label: "Market Cap", field: "marketCap" },
                        { label: "24HChange", field: "percentChange24h" }
                      ]}
                      className="Table"
                      errorMessage={() => <h3>No Data found</h3>}
                      {...props}
                    />
                    <Pagination
                      pageNumber={totalPages}
                      classList="pagination mt-3 mr-5"
                      onPageChange={this.handlePageChange}
                      currentPage={+currentPage}
                      onPrevChange={this.handlePrevChange}
                      onNextChange={this.handleNextChange}
                      {...props}
                    />
                  </ErrorBoundary>
                );
              }}
            />
            <Route path="/currency/:currency" component={CurrencyItem} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
// create HOC for spinner and for service
