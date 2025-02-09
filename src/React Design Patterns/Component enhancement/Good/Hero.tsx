import React, { useEffect, ComponentType } from "react";

// Define a generic HOC with proper TypeScript types
function withLogging<T extends object>(WrappedComponent: ComponentType<T>) {
  const WithLogging: React.FC<T> = (props) => {
    useEffect(() => {
      console.log(
        `${WrappedComponent.displayName || WrappedComponent.name} Mounted!`
      );
    }, []);

    return <WrappedComponent {...props} />;
  };

  // Preserve the component's name for debugging
  WithLogging.displayName = `WithLogging(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithLogging;
}

// Define component props
interface MyComponentProps {
  name: string;
}

// Functional component
const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Enhance component with HOC
const EnhancedComponent = withLogging(MyComponent);

export default function App() {
  return <EnhancedComponent name="World" />;
}
