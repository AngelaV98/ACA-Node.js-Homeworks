function withChildFunction(Wrapped, fn) {
  return props => {
    <Wrapped {...props}>{fn}</Wrapped>;
  };
}

// usage
// const ComponentNameWIthChildren = withChildFunction()