// Code SimpleComponent Here
import react, {Component} from 'react';

import React from 'react';

export default class SimpleComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            mood:'happy'
        }
    }
    handleClick = () =>{
        let myStatuse= this.state.mood;
        if(myStatuse=='sad'){
            this.setState({
                mood:'happy'
            })
        }
        else {
            this.setState({
                mood:'sad'
            })
        }
    }
    render(){
        return(
            <div onClick={this.handleClick}>{this.state.mood}</div>
        );
    }
}