import React, { useState } from 'react'

const Clock = () => {

    // let curTime = new Date().toLocaleTimeString();
    const [time,setTime] = useState('');

    const updateTime = ()=>{
    const curTime = new Date().toLocaleTimeString();
        setTime(curTime)
    }

    setInterval(updateTime,1000)
    return (
        <div>
            {time}
        </div>
    )
}

export default Clock
