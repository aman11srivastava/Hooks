import React, { useState, useEffect } from 'react'

const CounterConditionaluseEffect = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
            console.log('Updating Doc Title')
            document.title = `Clicked ${count} times`
    }, [count])
    // For conditionally rendering, we pass a second parameter (props or state), an array, and we specify the variable (props or state) that we have to monitor, i.e., if the value of that variable (props or state) changes, then only it should re-render, therefore it is conditionally rendering

    // Here therefore only if the count value changes then only the dom will re-render

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h4>Clicked {count} times</h4>
            <button
                onClick = {() => setCount(count + 1)}
            >
                Click Me
            </button>    
        </div>
    )
}

export default CounterConditionaluseEffect
