import React,{useEffect, useState} from 'react'

const lifeCycle = () => {

    const [count, setCount]=useState(0)

    useEffect(()=>{
        console.log('마운트 됨')

        return ()=>{
            console.log('언마운트 됨')
        }
    },[])

    useEffect(()=>{
        if(count>0){
            console.log(`count 업데이트 됨 ${count}`)
        }
    },[count])

    return (
        <div>
            <p>클리된 수: {count}</p>

            <button onClick={()=>setCount(prev=>prev+1)}>클릭</button>
        </div>
    )
}

export default lifeCycle