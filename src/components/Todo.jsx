import axios from 'axios'
import React, { useEffect } from 'react'
import TODOinput from './TODOinput'
import {useDispatch,useSelector} from "react-redux"
import { todoactionFailure, todoactionRequest, todoactionSuccess } from '../redux/action'
import { posttodoerror, posttodorequest, posttodosuccess } from '../redux/action';
import {Link} from "react-router-dom"
const Todo = () => {


  const url="http://localhost:8080/todos"
  const {Todos,isLoading}=useSelector((state)=>{
    return {
      Todos:state.Todos,
      isLoading:state.isLoading
    }
  })

    const dispatch=useDispatch()

const getdata=()=>{
    dispatch(todoactionRequest())
    axios.get(`http://localhost:8080/todos`)
    .then((res)=>{
      console.log(res.data)
        dispatch(todoactionSuccess(res.data))
       
    })
    .catch(()=>{
        dispatch(todoactionFailure())
    })
}
useEffect(()=>{
    getdata()
},[])




const addtodohandle=(input)=>{
  let ob={
    title:input,
    status:false
  }
  dispatch(posttodorequest())
  axios.post(url,ob)
  .then((res)=>{
    console.log(res)
    dispatch(posttodosuccess(res.data))
    getdata()
  })
  .catch(()=>{
    dispatch(posttodoerror())
  })
  }



const togglestatus=(id,status)=>{
  let ob={
    status:!status
  }
  axios.patch(`http://localhost:8080/todos/${id}`,ob)
  .then((res)=>{
    getdata()
  })

}
const removetodo=(id)=>{

  axios.delete(`http://localhost:8080/todos/${id}`)
  .then((res)=>{
    getdata()
  })

}


  return (
    <div>
      <TODOinput addtodohandle={addtodohandle} />
     
      {Todos.length>0 && Todos.map((item)=>(
       <div key={item.id} > <Link  to={`/todo/${item.id}`}>
            <h1 >{item.title}---{item.status?"completed":"pending"}</h1></Link>
            <button onClick={()=>togglestatus(item.id,item.status)}>Toggle Status</button>
            <button onClick={()=>removetodo(item.id)}>Remove</button>
          
        </div>
      ))}
    </div>
  )
}

export default Todo
