import { Component, ReactNode } from "react";

interface ErrorBoulderyProps {
  fullback: JSX.Element;
  children: React.ReactNode;
}

interface ErrorBoulderyState {
  hasError: boolean;
  error: Error | null;
}
export class ErrorBouldery extends Component<
  ErrorBoulderyProps,
  ErrorBoulderyState
> {
  constructor(props: ErrorBoulderyProps) {
    super(props);
    this.state = { error: null, hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { error: error, hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError == true) {
      return this.props.fullback;
    } else {
      return this.props.children;
    }
  }
}

interface IErrorFallback {
  error: string;
  reset: () => void;
}

export const ErrorFallback = ({ error, reset }: IErrorFallback) => (
  <div className="error-container">
    <h2>Something went wrong</h2>
    <p>{error}</p>
    {reset && <button onClick={reset}>Try again</button>}
  </div>
);
