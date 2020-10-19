import React, { Component } from 'react'

class ClassCounterEffect extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount = () => {
        document.title = `Clicked ${this.state.count} times` 
    }

    componentDidUpdate = () => {
        document.title = `Clicked ${this.state.count} times.`
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return (
            <div>
                <button
                    onClick={this.incrementCount}
                >
                    Click Me
                </button>
                <h3>You clicked me {this.state.count} times</h3>
            </div>
        )
    }
}

export default ClassCounterEffect
