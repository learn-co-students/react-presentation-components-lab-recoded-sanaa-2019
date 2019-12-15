import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mood: 'happy'
        }
    }

    sad = () => {
        this.setState({ mood: "sad" })
    }

    render() {
        return (
            <div onClick={this.sad}>
                {this.state.mood}
            </div>
        )
    }}