import {Routes,Route} from "react-router-dom"

import React from 'react'
import Todo from "../components/Todo"
import TodoItem from "../components/Pages/TodoItem"
import TODOEDIT from "../components/Pages/TODOEDIT"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/"  element={<Todo/>}></Route>
        <Route path="/todo/:id"  element={<TodoItem/>}></Route>
        <Route path="/todo/:id/edit" element={<TODOEDIT/>}></Route>
    </Routes>
  )
}

export default AllRoutes
