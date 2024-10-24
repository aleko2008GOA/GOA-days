import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error){
        return { error };
    }

    render(){
        return this.state.error ? <p>You have some errors in your code</p> : this.props.children;
    }
}

export default ErrorBoundary;