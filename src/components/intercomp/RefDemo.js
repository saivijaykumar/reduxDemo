import React, { Component } from 'react';
import ColorForm from './ColorForm';

class RefDemo extends Component {
    constructor(props){
        super(props);
        this.state={
            data:'Hello'
        }
        this.handleChange=this.handleChange.bind(this);
        this.clearData=this.clearData.bind(this);
    }
    handleChange=(event)=>{
        this.setState({
            data:event.target.value
        });
    }
    clearData=(event)=>{
        this.setState({
            data:""
        });
        alert(this.refs.myinput.value);
        this.refs.myinput.focus();
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.data} ref="myinput" onChange={this.handleChange}></input>
                <div>{this.state.data}</div>
                <button onClick={this.clearData}></button>
                <ColorForm></ColorForm>
            </div>
        );
    }
}

export default RefDemo;