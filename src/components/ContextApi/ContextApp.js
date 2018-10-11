import React, { Component } from 'react';
import NumberContext from "./Context";
import { Counter } from './Counter';





class ContextApp extends Component {
    constructor(props){
        super(props)
        this.state={
            number:0
        }
        this.onDecHandler=this.onDecHandler.bind(this);
        this.onIncHandler=this.onIncHandler.bind(this);
    }

    onIncHandler=()=>{
        this.setState({
            number:this.state.number+1
        })
    }
    onDecHandler=()=>{
        this.setState({
            number:this.state.number-1
        })
    }
    render() {
        return (
            <div>
                <NumberContext.Provider value={this.state.number}>
                   <Counter></Counter>
                </NumberContext.Provider>
                
                <button onClick={this.onIncHandler}>Increment</button>
                <button onClick={this.onDecHandler}>Decrement</button>
            </div>
        );
    }
}

export default ContextApp;