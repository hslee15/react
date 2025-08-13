import React, { useContext } from 'react'
import { CounterContext } from '../context/Countercontext'
const Display = () => {

    const { count } = useContext(CounterContext)
    return (
        <div>
            <p>
                현재 카운트 :  {count}
            </p>
        </div>
    )
}

export default Display