// Counter without the use of Hooks 


import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
        this.handleCount = this.handleCount.bind(this);
    }

    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>Counter using Class Component</h1>
                <button
                    onClick={this.handleCount}
                >
                    Count: {this.state.count} (via class Component)
                </button>
            </div>
        )
    }
}

export default ClassCounter
