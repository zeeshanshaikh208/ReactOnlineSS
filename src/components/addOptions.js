import React,{ Component } from "react";

export default class AddOptions extends Component{
    constructor(props)
    {
        super(props)
        this.callMe=this.callMe.bind(this)
    }


    callMe(e){
        e.preventDefault()
      const data= e.target.elements.uname.value
      const newdata= this.props.hao(data)
    }

    render(){
        return(
            <form onSubmit={this.callMe}>
            Name:<input type="text" name="uname"/>
            <button>addOptions</button>
            </form>
        )
    }
}