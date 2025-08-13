import React, {useContext} from 'react'
import { CounterContext } from '../context/Countercontext'

const Button = () => {
    const {setCount}=useContext(CounterContext)

  return (
    <div>
        <button onClick={()=>setCount(prev=>prev-1)}>-</button>
        <button onClick={()=>setCount()}>0</button>
        <button onClick={()=>setCount(prev=>prev+1)}>+</button>
    </div>
  )
}

export default Button