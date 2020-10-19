import React, {useEffect, useState} from 'react'

const HookCounterEffect = () => {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    useEffect(() =>{
        document.title = `You clicked ${count} times`
    })

    // We pass a function as a parameter and that parameter is called after every re-render and thus acting like componentDidMount() and/or componentDidUpdate()
    // Therefore useEffect runs after every re-render of the component

    return (
        <div>
            <h3>Clicked {count} times</h3>
            <button
                onClick = {() => setCount(count + 1)}
            >
                Click Me
            </button>
        </div>
    )
}

export default HookCounterEffect
