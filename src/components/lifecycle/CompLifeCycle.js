  import React, { Component } from 'react';
import Content from '../intercomp/Content';
  
  class CompLifeCycle extends Component {
      constructor(props){
          super(props);
          this.state={
              data:0,
              msg:'Initial data..'
          }
          this.setNewNumber=this.setNewNumber.bind(this);
          this.updateState=this.updateState.bind(this);
      }
      setNewNumber=(e)=>{
          this.setState({data:this.state.data + 1})
      }
      updateState=(e)=>{
          this.setState({msg:e.target.value})
      }
      render() {
          return (
              <div>
                  <button onClick={this.setNewNumber}>INCREMENT</button>
                  <Content myNumber={this.state.data}></Content>
              </div>
          );
      }
  }
  
  export default CompLifeCycle;