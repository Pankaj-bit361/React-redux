import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addAction, Reduceaction } from '../redux/action'
const Counter = () => { 

    const store=useSelector((state)=>(state.counter))
    console.log(store)

const dispatch=useDispatch()

    const handleadd=()=>{
dispatch(addAction(1))
    }
    const handlereduce=()=>{
        dispatch(Reduceaction(1))
    }

  return (
    <div>
    <h1>Counter:{store}</h1>
      <button onClick={handleadd}>ADD</button>
      <button onClick={handlereduce}>Reduce</button>
    </div>
  )
}

export default Counter
