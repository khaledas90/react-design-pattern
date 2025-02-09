import React from "react";

const withLogging = (Component: any) => {
  return class extends React.Component {
    componentDidMount() {
      console.log("Component Mounted!");
    }

    render() {
      return <Component />;
    }
  };
};

const MyComponent = () => {
  return <h1>Hello, World!</h1>;
};

const EnhancedComponent = withLogging(MyComponent);

export default EnhancedComponent;
