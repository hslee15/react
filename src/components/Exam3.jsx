import React, { useState } from 'react'

const Exam3 = () => {

    const [input, setInput]=useState('')

    const onChangeInput=(e)=>{
        setInput(e.target.value)
    }

    const onClickButton=()=>{
        setInput('')
    }

    console.log(input)
    return (
    <div>
        <h2>input 실습</h2>
        <input value={input} onChange={onChangeInput} type="text" />
        <button onClick={onClickButton}>click하면 글씨 사라짐.</button>
    </div>
    )
}

export default Exam3