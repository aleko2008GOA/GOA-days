import React, {Component} from "react";

class Loading extends Component{
    constructor(props){
        super(props);
        this.state = {toRender: <p>Loading...</p>}
    }

    componentDidMount() {
        setTimeout(() =>{
            this.setState({toRender: <h1>Hello world!</h1>})
        }, 3000);
    }

    render = () =>{
        return (
            this.state.toRender
        )
    }
}

export default Loading;