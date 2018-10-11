import React, { Component } from 'react';
import { Heading } from '../../Heading';

class TextInput extends Component {
    
    constructor(props){
        super(props);
        this.state={inputText:"sai"}
    }
    handleChange=(event)=>{
        this.setState({inputText:event.target.value})
    }
    render() {
        let myStyle={
            fontSize:20,
            color:'#FF0000'
        }
        return (
            <div>
                <input type="text" value={this.state.inputText} onChange={this.handleChange.bind(this)}></input>
                <div style={myStyle}>{!this.state.inputText?'enter name please':this.state.inputText}</div>
                <Heading ></Heading>
            </div>
        );
    }
}

export default TextInput;