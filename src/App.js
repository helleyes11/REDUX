import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './actions/todoActions'
import TodoList from './TodoList'
import { v4 as uuidv4, v4 } from 'uuid';
import { toggleFilter } from './actions/filterActions';
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState({
    id:v4(),
    desc:"",
    isDone:false
  })
  const todos=useSelector(state=>state.todoReducer)

  const filter = useSelector(state => state.filterReducer)
  const handleSave =()=>{

    dispatch(addTodo(newTodo))
    setNewTodo({
      id:v4(),
      desc:"",
      isDone:false
    })
  }
  return (
    <div className='App'>
      <div>
        <button className="butt" onClick={()=>dispatch(toggleFilter(null))}>ALL</button>
        <button className="butt" onClick={()=>dispatch(toggleFilter(true))}>DONE</button>
        <button className="butt" onClick={()=>dispatch(toggleFilter(false))}>UNDONE</button>
      </div>
      <div>
        <input type="text" value={newTodo.desc} onChange={(e)=>setNewTodo({...newTodo,desc:e.target.value})}></input>
        <button className="butt" onClick={handleSave}>ADD</button>
      </div>
      <TodoList todos={filter===null? todos:todos.filter(el=>el.isDone===filter)}></TodoList>
    </div>
  )
}

export default App
