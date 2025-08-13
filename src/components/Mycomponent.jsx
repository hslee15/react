import React,{useState,useContext} from 'react'
import { MyContext } from '../context/MyContext'

const Mycomponent = () => {
    const {value,setValue}=useContext(MyContext)
    return (
        <div>
            <p>
                {value}
            </p>
            <button
            onClick={()=>setValue("update from component")}>
                update
            </button>
        </div>
    )
}

export default Mycomponent