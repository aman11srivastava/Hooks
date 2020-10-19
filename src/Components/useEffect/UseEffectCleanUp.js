
// Implementing componentWillUnmount() using useEffect Hook

import React, { useState, useEffect } from 'react'
import UseEffectRunOnce from './UseEffectRunOnce'

const UseEffectCleanUp = () => {

    const [display, setDisplay] = useState(true)

    useEffect(() => {

    })

    return (
        <div>
            <button
                onClick = {() => setDisplay(!display)}
            >
                Toggle Display
            </button>
            {display && <UseEffectRunOnce/>}
            {/* Unmounting done in the above child component. */}
        </div>
    )
}

export default UseEffectCleanUp
