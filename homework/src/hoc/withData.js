import React, { Component } from "react";
import Loading from "../components/loading";

export default function withData(Wrapped) {
  return class extends Component {
    state = {
      data: null,
      loading: true
    };
    componentDidMount() {
      const { getInfo, getData, ...rest } = this.props;
      const info = getInfo ? getInfo(rest) : undefined;
      getData(info)
        .then(({ data }) => this.setState({ data, loading: false }))
        .catch(err => this.setState({ loading: false }));
    }

    render() {
      const { data, loading } = this.state;
      if (loading) {
        return <Loading />;
      }
      return <Wrapped data={data} {...this.props} />;
    }
  };
}