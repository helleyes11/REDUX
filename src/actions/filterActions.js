import { TOGGLE_FILTER } from "./types"

export const toggleFilter = (filter) =>{
return{
    type:TOGGLE_FILTER,
    payload:filter
}
}