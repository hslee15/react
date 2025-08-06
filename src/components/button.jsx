import React from 'react'

// const button = (props) => {
//     return (
//     <button style={{color:props.color}}>
//         {props.text}-
//         {props.color}
//     </button>
//     )
// }

const button = ({text, color='gray', children=null}) => {

    const onClickButton=(e)=>{
        console.log(e)
        console.log(text)
    }

    return (
    <button style={{color:color}} onClick={ onClickButton}>
        {text}--
        {color.toUpperCase()}
        {children}
    </button>
    )
}

export default button