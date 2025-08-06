import React ,{useState}from 'react'

const Counter = () => {

    const [Count, setCount]=useState(0)

    const increamentCount=()=>{
        console.log('text')
        setCount(Count+1)
    }
    const decrementCount=()=>{
        console.log('text')
        setCount(Count-1)
    }
    const resetCount=()=>{
        console.log('text')
        setCount(0)
    }
    return (
        <div>
            <h1>
            현재 Count: {Count}
            </h1>
            <button onClick={decrementCount}>-</button>
            <button onClick={resetCount}>reset</button>
            <button onClick={increamentCount}>+</button>
        </div>
    )
}

export default Counter