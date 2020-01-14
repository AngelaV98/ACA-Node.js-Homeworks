import React from "react";
import { Link } from "react-router-dom";
import withData from "../../hoc/withData";

function CurrencyItem({
  data: {
    name,
    symbol,
    rank,
    price,
    volume24h,
    marketCap,
    totalSupply,
    percentChange24h
  }
}) {
  return (
    <div className="card">
      <div className="card-head ml-3 pointer">
        <Link to="/">
          <h3>&larr;</h3>
        </Link>
      </div>
      <div className="card-body">
        <h4 className="card-title">
          {rank}. {name} ({symbol})
        </h4>
        <p className="card-text">
          <span className="text-success">Price: </span>
          {price}
        </p>
        <p>
          <span className="text-success">Volume 24h: </span>
          {volume24h}
        </p>
        <p className="card-text">
          <span className="text-success">Market Cap: </span>
          {marketCap}
        </p>
        <p className="card-text">
          <span className="text-success">Total supply: </span> {totalSupply}
        </p>
        <p className="card-text">
          <span className="text-success">Percent Change 24h: </span>{" "}
          {percentChange24h}
        </p>
      </div>
    </div>
  );
}
export default withData(CurrencyItem);


