import React from 'react'

const input = ({inputValue,title,placeholder}) => {
    const onClickButton=()=>{
        console.log(`입력값은 ${inputVale}`)
    }
  return (
    <div>
        <h2>{title}</h2>
        <input 
            value={inputValue}
            type="text"
            placeholder={placeholder}
        />
        <button onClick={onClickButton}>Click me</button>
    </div>
  )
}

export default input