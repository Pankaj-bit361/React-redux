import axios from 'axios';
import React from 'react'
import { useState } from 'react';
const TODOinput = ({addtodohandle}) => {
const [input,setinput]=useState("");



const handleaddtodo=()=>{
  addtodohandle(input)
  setinput("")
}


  return (
    <div>
      <input value={input} type="text" placeholder='add todo' onChange={(e)=>setinput(e.target.value)} />
      <button onClick={handleaddtodo} >Add TODO</button>
    </div>
  )
}

export default TODOinput
