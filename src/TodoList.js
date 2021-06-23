import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map(todo=><Todo todo={todo}></Todo>)}
        </div>
    )
}

export default TodoList
