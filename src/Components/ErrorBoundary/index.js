import React from 'react';
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
        return <Home/>
      }
  
      return this.props.children; 
    }
  }