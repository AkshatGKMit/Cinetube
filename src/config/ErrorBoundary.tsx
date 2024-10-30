import { Component, ErrorInfo } from 'react';
import { ErrorScreen } from '@screens/index';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(err: Error): ErrorBoundaryState {
    return { hasError: true, error: err.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ error: `${error.name}: ${error.message}` });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: '' });
  };

  render() {
    const { error, hasError } = this.state;

    if (hasError) {
      return (
        <ErrorScreen
          error={error}
          onRetry={this.handleRetry}
        />
      );
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
