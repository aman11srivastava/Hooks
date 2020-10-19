import React, { Component } from 'react'

class ClassCounterConditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount = () => {
        document.title = `You clicked ${this.state.count} times`
    }

    componentDidUpdate = (prevProps, prevState ) => {
        if(prevState.count !== this.state.count){
            // Comparing the count value with prev Count value, if it changes, then only it should update
            console.log('Updating Document title')
            document.title = `You clicked ${this.state.count} times`
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <input
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                />            
                <h4>Clicked {this.state.count} times</h4>
                <button
                    onClick={this.handleClick}
                >
                    Click Me
                </button>
            </div>
        )
    }
}

export default ClassCounterConditional
