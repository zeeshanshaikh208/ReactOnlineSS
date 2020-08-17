import React,{ Component } from "react";

export default class Counter extends Component
{

    constructor(props)
    {
        super(props)
        this.inc=this.inc.bind(this)

        this.state={
            count:0
        }
    }

    componentDidMount(){
        console.log('component mount');
    }

    componentDidUpdate()
    {
        console.log('component updated')
    }

    inc(e)
    {
        e.preventDefault()
       // alert('add button pressed')
       //this.state.count=this.state.count+1;
       
       this.setState((prevState)=>{
           return{
               count: prevState.count+1
           }
       })
       console.log(this.state)
    }
    dec(e)
    {
        e.preventDefault()
        alert('minus button pressed')
    }
    reset(e)
    {
        e.preventDefault()
        alert('reset button pressed')
    }
    render()
    {
        return(
            <div>
            counter: {this.state.count}
            <button onClick={this.inc}>add</button>
            <button onClick={this.dec}>minus</button>
            <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}