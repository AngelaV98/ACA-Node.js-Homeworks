import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";

class ErrorBoundary extends Component {
  state = {
    hasError: this.props.hasError
  };
  get isControlled() {
    return this.props.hasError !== undefined;
  }
  getState() {
    return this.isControlled ? this.props.hasError : this.state.hasError;
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }
  render() {
    const hasError = this.getState();
    if (hasError) {
      return <ErrorIndicator />;
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;