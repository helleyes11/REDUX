import {  ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from "./types"

export const addTodo=(newTodo)=>{
    return {
        type : ADD_TASK,
        payload:newTodo 
    }
}
export const deleteTodo=(idTodo)=>{
    return {
        type : DELETE_TASK,
        payload:idTodo 
    }
}
export const toggleTask=(idTodo)=>{
    return {
        type : TOGGLE_TASK,
        payload:idTodo 
    }
}

export const editTodo=(newTodo)=>{
    return {
        type : EDIT_TASK,
        payload:newTodo
    }
}