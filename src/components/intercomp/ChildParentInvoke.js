import React, { Component } from 'react';

class ChildParentInvoke extends Component {
    constructor(props){
        super(props);
        this.state={
            data:'eneter data'
        }
        this.updateState=this.updateState.bind(this);
    }
    updateState=(event)=>{
        this.setState({
            data:event.target.value
        })
    }
    render() {
        return (
            <div>
              <h1 className='text-success'>Parent component</h1>
              <h2 className='text-danger bg-success'>{this.state.data}</h2>
              <br/>
              <h2 >Child Component</h2> <br/>
               
              <Content myDataProp = {this.state.data} 
                  updateStateProp = {this.updateState}></Content>      
            <ChildContent myDataProp={this.state.data} ></ChildContent>
            </div>
         );
    }
}

export default ChildParentInvoke;


class Content extends Component {
    render() {
        return (
            <div>
                 <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp}></input>
            </div>
        );
    }
}

class ChildContent extends Component {
    render() {
        return (
            <div>
                 {this.props.myDataProp} 
            </div>
        );
    }
}

