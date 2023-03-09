import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
const TodoItem = () => {
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



const togglestatus=(id,status)=>{
  let ob={
    status:!status
  }
  axios.patch(`http://localhost:8080/todos/${id}`,ob)
  .then((res)=>{
    getsingle()
  })

}




const {title,status,id}=data
console.log(data)
    console.log(page.id)
  return (
    <div>
      <h1>I am todo item</h1>
      <Link to={`/todo/${id}/edit`}><h1>{id}--{title}--{status?"completed":"pending"}</h1></Link>
      <button onClick={()=>togglestatus(id,status)}>Toggle Status</button>
    </div>
  )
}

export default TodoItem
