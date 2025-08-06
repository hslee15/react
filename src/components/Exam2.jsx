import React, { useState } from 'react'

const Exam2 = () => {

    const [text,setText]=useState('Hello')

    const onClickButton=()=>{
        text==='Hello'? setText('Goodbye'):setText('Hello')
    }
    return (
        <div>
            <h2>{text}</h2>
            <button onClick={onClickButton}>click</button>
        </div>
    )
}

export default Exam2