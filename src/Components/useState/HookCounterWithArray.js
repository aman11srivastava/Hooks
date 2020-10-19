import React, { useState } from 'react'

const HookCounterWithArray = () => {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([
            ...items, {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }
    return (
        <div>
            <h1>useState with Arrays</h1>
            <button
                onClick={addItem}
            >
                Add Item
            </button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookCounterWithArray
