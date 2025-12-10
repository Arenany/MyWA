import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="w-full p-8 flex flex-col items-center justify-center bg-slate-50 border-t border-slate-100 min-h-[200px] text-center">
          <AlertTriangle className="text-amber-500 mb-2" size={32} />
          <h3 className="text-slate-900 font-bold mb-1">Something went wrong</h3>
          <p className="text-slate-500 text-sm mb-4">We couldn't load this section.</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;