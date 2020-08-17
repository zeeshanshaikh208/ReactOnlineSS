import React,{ Component } from "react";

export default class Header extends Component{
    render(){
        return(
            <div>
            <p>Welcome to Header</p>
            {this.props.data1}
            </div>
        )
    }
}