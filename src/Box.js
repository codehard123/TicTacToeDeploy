import React from 'react'
const Box=(props)=>{
    return(
    <button style={{border:"1px solid black",padding:"5px",width: "50px",height:"50px"}}>{props.array[props.index]}</button>
    )
}
export default Box