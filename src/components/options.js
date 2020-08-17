import React,{ Component } from "react";
import Option from "./option";

export default class Options extends Component{
    render(){
        return(
            <div>
            <p>Options</p>
            <button onClick={this.props.hdo}>removeAll</button>
        
            {
                 this.props.optiondata.map((data) => <Option key={data} optionText={data}
                 hd={this.props.hd}/>)
                }
            </div>
        )
    }
}