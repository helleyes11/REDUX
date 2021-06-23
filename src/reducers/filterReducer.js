import { TOGGLE_FILTER } from "../actions/types"

const filterReducer =(state=null,action) =>{
    switch (action.type) {
        case TOGGLE_FILTER:
            return action.payload
            
    
        default:
            return state
    }

}
export default filterReducer