import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from "axios"

const TODOEDIT = () => {
const [text,settext]=useState("")
const naviagte=useNavigate()
    const page=useParams()
    const [data,setdata]=useState([])
    const getsingle=()=>{
        axios.get(`http://localhost:8080/todos/${page.id}`)
        .then((res)=>{
            setdata(res.data)
        })
    
    }
    useEffect(()=>{
    getsingle()
    },[])
    
    const handleedit=(id)=>{
        const ob={
            title:text
        }
        axios.patch(`http://localhost:8080/todos/${id}`,ob)
        .then((res)=>{
           getsingle()
        })
    
    }
    
    const {title,status,id}=data
console.log(data)
  return (
    <div>
      <h1>TODO EDIT</h1>
      <input type="text" value={text} onChange={(e)=>settext(e.target.value)}  />
      <button onClick={()=>handleedit(id)}>EDIt</button>
      <h1>{id}--{title}--{status?"completed":"pending"}</h1>
      <button onClick={()=>naviagte("/")}>Home</button>
    </div>
  )
}

export default TODOEDIT
