import React, { useState } from 'react'

const ReactEvent = () => {

    const [color, setColor] = useState('blue');
    const [text, setText] = useState('Click Me');

    const addEvent = ()=>{
        setColor('green')
        setText('Clicked')
    }
    const doubleClick = ()=>{
        setColor('blue');
        setText('Click Me')
    } 
    return (
        <div style={{backgroundColor: color , display:'flex', flex:'cloumn', justifyContent:'center', alignItems:'center'}}>
            <button onMouseEnter={addEvent} onMouseLeave={doubleClick}>{text}</button>
        </div>
    )
}

export default ReactEvent
