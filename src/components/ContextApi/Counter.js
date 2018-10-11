import React, { Component } from 'react';
import NumberContext from "./Context";
export  const Counter=()=>{
    return(
        <NumberContext.Consumer>
        {(val)=><h1>{val}</h1>}
        </NumberContext.Consumer>
        
    )
}