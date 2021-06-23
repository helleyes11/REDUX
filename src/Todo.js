import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTask } from './actions/todoActions'


const Todo = ({todo}) => {
    const [updatedTodo, setUpdatedTodo] = useState(todo)
    const dispatch = useDispatch()
    return (
        <div>
            <div><span  style={{textDecoration:todo.isDone? "line-through":"none"}} onClick={()=>dispatch(toggleTask(todo.id))}>{todo.desc}</span><button className="butt" onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button></div>
            <div>
                <input value={updatedTodo.desc} onChange={(e)=>setUpdatedTodo({...updatedTodo,desc:e.target})}></input>
                 <button className="butt" onClick={()=>dispatch()}>update</button>           
            
            </div>
        </div>
    )
}

export default Todo
