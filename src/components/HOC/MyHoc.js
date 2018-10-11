import React from 'react';
const newData={
    data:'I am hoc'
}

const MyHoc=(ComposedCoponent) =>
class  extends React.Component {
    componentDidMount(){
        this.setState({
            data:newData.date
        })
    }
    render() {
        return (
            <div>
                <ComposedCoponent {...this.props} {...this.state}></ComposedCoponent>
            </div>
        );
    }
}

class MyComponent extends Component{
    render(){
        return(
            <div>
                <h1>Testing hoc</h1>
                <h2>{this.props.data}</h2>
            </div>
        )
    }
}

export default MyHoc;
