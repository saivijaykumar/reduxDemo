import React from 'react'

import ChildParentInvoke from './intercomp/ChildParentInvoke';
import RefDemo from './intercomp/RefDemo';
import ContextApp from './ContextApi/ContextApp';
import CompLifeCycle from './lifecycle/CompLifeCycle';
import WeatherComponent from './lifecycle/WetherComponent';

export default class Dashboard extends React.Component{
    constructor(props){
      super(props)
      this.state={
          company:"Verizon IT Servcices"
      }
    }

    render(){
        return(
            <div className='bg-warning'>
                <h1>{this.state.company}</h1>
                <ContactInfo mail="vijay@gmail.com"></ContactInfo>
                <WeatherComponent></WeatherComponent>
            </div>
        )
    }
}

const ContactInfo=(props)=>{
    return(<div>
        <h3>{props.mail}</h3>
    </div>)
}

ContactInfo.defaultProps={
    mail:"saivijay@gmail.com"
}