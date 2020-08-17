import React,{ Component } from "react";

export default class Action extends Component{
    callMe(){
        alert('Action button pressed')
    }
    render(){
        return(
            <button disabled={!this.props.hasOption} onClick={this.callMezd}>Click Here</button>
        )
    }
}