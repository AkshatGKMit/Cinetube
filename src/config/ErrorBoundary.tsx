import React, { ReactNode } from 'react';
import { ErrorScreen } from '@screens/index';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(err: Error): ErrorBoundaryState {
    return { hasError: true, error: err.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ error: `${error.name}: ${error.message}` });
    console.error('Error caught in ErrorBoundary:', error, info);
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
