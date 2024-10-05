import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {error: null};
    }

    static getDerivedStateFromError(error){
        return {error};
    }

    componentDidCatch(error, info){
        this.state.error = error;
    }

    render(){
        return this.state.error ? <h1>Ooops! Something went wrong!</h1> : this.props.children;
    }
}

export default ErrorBoundary;