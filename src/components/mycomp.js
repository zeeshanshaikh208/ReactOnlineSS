import React,{ Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Action from "./action";
import Options from "./options";
import AddOptions from "./addOptions";
import Counter from "./counter";


export default class MyComp extends Component
{
    constructor(props)
    {
        super(props)
        this.handDeleteOptions=this.handDeleteOptions.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.handleOne=this.handleOne.bind(this)

        this.state={
            options: ['data1', 'data2', 'data3', 'data4']
           // options: []
        }
    }

    handDeleteOptions(){
        this.setState(()=>{
            return{
                options: []
            }
        })
    }

    handleOne(data){
        this.setState((prevState)=>{
            return{
                options: prevState.options.filter((option)=> data !== option)
            }
            
        })
    }

    handleAddOption(option){
        if(!option){
            return 'enter a valid value'
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'data already exist'
        }
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option)
            }
        })
    }

    render()
    {
        //const options = ['data1', 'data2', 'data3', 'data4']
        return(
            
            <div>
            <Header data1="this is header using prop"/>
            <p>Welcome to child Component</p>
           <Options optiondata={this.state.options} hdo={this.handDeleteOptions}
           hd={this.handleOne}/>
           <Action hasOption={this.state.options.length>0}/>
            <AddOptions hao={this.handleAddOption}/>
            <Counter/>
           <Footer/>
            </div>
            
        )
    }
}