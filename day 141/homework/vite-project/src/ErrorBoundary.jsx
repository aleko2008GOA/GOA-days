import React from "react";
import { Children } from "react";
import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = { error: null };
    }

    componentDidCatch(error, info){
        console.error("Error caught in ErrorBoundary:", error, info);
    }

    static getDerivedStateFromError(error){
        return {error};
    }

    render(){
        if(this.state.error instanceof ReferenceError){
            return <h1>Oops, looks likeyou are using not defined variable</h1>;
        }else if(this.state.error instanceof TypeError){
            return <h1>Oops, looks like you have a typo</h1>;
        }else{
            return <div>{this.props.children}</div>
        }
    }
}

export default ErrorBoundary;