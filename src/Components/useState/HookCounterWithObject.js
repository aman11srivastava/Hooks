import React, { useState } from 'react'

const HookCounterWithObject = () => {

    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })

    return (
        <>
            <h1>useState with object</h1>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={(e) => setName({...name, firstName: e.target.value})}
                />
                <input 
                    type="text"
                    value={name.lastName}
                    onChange = {(e) => setName({...name, lastName: e.target.value})}
                />
                <h3>Your firstName is {name.firstName}</h3>
                <h3>Your lastName is {name.lastName}</h3>
            </form>  
        </>
    )
}

export default HookCounterWithObject
