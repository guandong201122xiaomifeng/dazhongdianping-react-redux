import {combineReducers} from 'redux'
import todos from './todos'
import filter from './filter'
import text from './text'

export default combineReducers({
    todos,
    filter,
    text
})

// import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT} from '../actions/actionTypes'

// const initialState = {
//     filter: 'all',
//     text: '',
//     todos: []
// }

// const todoApp = (state = initialState, action) => {
//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos: [
//                     ...state.todos,
//                     {
//                         text: action.text,
//                         id: action.id,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo => {
//                     if(todo.id === action.id){
//                         return {
//                             ...todo,
//                             completed: !todo.completed
//                         }
//                     }else{
//                         return todo
//                     }
//                 })
//             }
//         case SET_FILTER:
//             return {
//                 ...state,
//                 filter: action.filter
//             }
//         case SET_TODO_TEXT:
//             return {
//                 ...state,
//                 text: action.text
//             }
//         default:
//             return state
//     }
// }

// export default todoApp
