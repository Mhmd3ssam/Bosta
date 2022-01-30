import React from 'react';
import "./style.css"
import Home from '../../Pages/trackingService';


export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Home />
          <div className="messageContainer">
            <h3 >
              {' الرجاء إدخال رقم الشحنة بشكل صحيح وتتبع الشحنة الخاصة بك '}
            </h3>
          </div>
        </>)

    }

    return this.props.children;
  }
}