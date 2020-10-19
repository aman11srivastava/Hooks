// Counter using Hooks

import React, { useState } from 'react'

const HookCounter = () => {

    const [count, setCount] = useState(0);

    return (
        <>
        <h1>Hook Counter simple</h1>
        <button
            onClick = {() => setCount(count+1)}
        >
            Count: {count} (via useState Hook)
        </button>
        </>
    )
}

export default HookCounter
