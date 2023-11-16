import React from 'react';
import { BiError } from 'react-icons/bi';
import style from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  isClickedErrorButton: boolean;
}

interface Props {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, Props> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error:', error);
    console.error('Error information:', errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { isClickedErrorButton } = this.props;

    if (hasError || isClickedErrorButton) {
      return (
        <div className={style.error}>
          <BiError />
          <div className={style.text}>
            Error occurred please restart the page or try again later
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
