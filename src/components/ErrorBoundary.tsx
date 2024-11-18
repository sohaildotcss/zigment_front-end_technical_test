import React, { useState } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

interface Props {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<Props> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  if (hasError) {
    return (
      <div className="p-4 bg-red-50 rounded-lg">
        <h2 className="text-red-800 font-bold mb-2">Something went wrong</h2>
        <p className="text-red-600">{error?.message}</p>
      </div>
    );
  }

  return (
    <ReactErrorBoundary fallbackRender={({ error }) => {
      setHasError(true);
      setError(error);
      console.error('Uncaught error:', error);
      return (
        <div className="p-4 bg-red-50 rounded-lg">
          <h2 className="text-red-800 font-bold mb-2">Something went wrong</h2>
          <p className="text-red-600">{error.message}</p>
        </div>
      );
    }}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary; 