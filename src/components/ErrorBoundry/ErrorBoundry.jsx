import React, { Component } from 'react';


class ErrorBoundry extends Component {
    state = { 
        trowError:false,
     }

    componentDidCatch() {
        this.setState({
            trowError:true
        })
    }
    render() { 
        const error = <div><h1>This block broken <span>wi fix that</span> </h1></div>
        if(this.state.trowError){
            return({error})
        }
        return ( 
            this.props.children
         );
    }
}
 
export default ErrorBoundry;