// Hook counter with prevState

import React, {useState} from 'react'

const HookCounterWithPrevState = () => {

    const initialState = 0
    const [count, setCount] = useState(initialState)

    return (
        <>
            <h1>Hook counter with PrevState</h1>
            <div>
                Count: {count}
                <br/>
                <button
                    onClick={() => setCount(prevCount => prevCount + 1)}
                >
                    Increment by 1
                </button>
                <button
                    onClick={() => setCount(initialState)}
                >
                    Reset
                </button>
                <button
                    onClick={() => setCount(prevCount => prevCount - 1)}
                >
                    Decrement by 1
                </button>
            </div>
        </>
    )
}

export default HookCounterWithPrevState
