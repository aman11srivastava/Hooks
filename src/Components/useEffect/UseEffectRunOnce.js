// ComponentDidMount() using useEffect

import React, { useState, useEffect } from 'react'

const UseEffectRunOnce = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect Called');
        window.addEventListener('mousemove', logMousePosition)

        // Returning another fucntion. The function that has been passed here will be unmounted 
        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove',logMousePosition)    
        }
    }, [])

    // If we specify the array in the useEffect as empty, then the useEffect() will behave as componentDidMount() and thus it will only render once

    return (
        <div>
            X- {x} Y- {y}    
        </div>
    )
}

export default UseEffectRunOnce
