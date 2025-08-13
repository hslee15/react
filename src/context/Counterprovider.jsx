import  {createContext} from "react"

export const CounterContext=createContext()
import React ,{useState} from 'react'
import { CounterContext } from './Countercontext'

export const CounterProvider = ({children}) => {

    const [count, setCount]=useState(0)

  return (
    <CounterContext.Provider value={{count, setCount}}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
