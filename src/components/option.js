import React,{ Component } from "react";

export default class Option extends Component{
    render(){
        return(
            <div>
            {this.props.optionText}
            <button onClick={(e)=>{
                this.props.hd(this.props.optionText)
            }}>Delete</button>
            </div>
        )
    }
}