import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = { error: null }
    }

    static getDerivedStateFromError(error){ return { error } };

    render(){
        return this.state.error ? <h1>Oops! semething went wrong!</h1> : this.props.children;
    }
}

export default ErrorBoundary;