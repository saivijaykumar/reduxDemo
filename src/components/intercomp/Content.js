import React, { Component } from 'react';

class Content extends Component {
    constructor(props){
        super(props);
        this.state={name:'Murthy'}
        console.log("In Constructor"+props.myNumber);
        console.log("1. content constructor fired");
        this.handleScroll=this.handleScroll.bind(this);
    }
    handleScroll=()=>{
        console.log("HANDLE SCROLL IS EXECUTED");
    }
    componentWillMount(){
        console.log("component will mount"+this.props.myNumber);
    }

    componentDidMount(){
        console.log("component did mount"+this.props.myNumber);
    }
    componentWillReceiveProps(nextProps){
        console.log("component will receive props"+nextProps.myNumber);
        this.setState({isPassed:nextProps.myNumber>=60})
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps");
        return{};
    };

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate");
        return nextProps.myNumber>3?true:false;
    }
    componentwillUpdate(nextProps,nextState){
        console.log("componentwillUpdate");
    }
    componentDidCatch(err){
        console.log("some error has been occured");
    }
    componentWillUnMount(){
        console.log("handle componet will unmount");
        window.removeEventListener('scroll',this.handleScroll);
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default Content;