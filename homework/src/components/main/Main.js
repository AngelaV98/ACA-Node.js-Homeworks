import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Table from "../table/";
import Header from "../header/";
import Pagination from "../pagination";
import CurrencyItem from "../currency-item";
import NotFound from "../not-found";
import ErrorBoundary from "../error-boundary";

import withData from "../../hoc/withData";
class Main extends Component {
  state = {
    search: this.props.data.currencies,
    currentPage: 1,
    perPage: 5,
    totalPages: 5
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.perPage !== this.state.perPage
    ) {
      this.props.getData();
    }
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
    const { data } = this.props;
    if (text === "") {
      this.setState({ search: data });
      return;
    }
    const newCurrencies = data.filter(({ name }) =>
      name.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ search: newCurrencies });
  };
  render() {
    const {
      data: {
        currencies: { hasError }
      },
      getCryptoCurrencyById
    } = this.props;
    const { search, totalPages, currentPage, perPage } = this.state;

    return (
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
              return (
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
          <Route
            path="/currency/:currency"
            render={props => (
              <CurrencyItem
                getData={getCryptoCurrencyById}
                getInfo={props => props.match.params.currency}
                {...props}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withData(Main);