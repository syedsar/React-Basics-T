import React, { useState } from 'react'

const BasicForm = () => {
    const [name, setName] = useState('');
    const [wishName, setWishName] = useState('');

    const display = ()=>{
        setWishName(name)
    }
    return (
        <div>
            <h1>HI {wishName}</h1>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
            <button onClick={display}>Wish</button>
        </div>
    )
}

export default BasicForm
