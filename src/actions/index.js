import { 
    ADD_TODO,
    TOGGLE_TODO,
    SET_FILTER,
    SET_TODO_TEXT,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE
} from './actionTypes'

// 这三个action, 只会在这里使用
const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST
})
const fetchTodosSuccess = (data) => ({
    type: FETCH_TODOS_SUCCESS,
    data
})
const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    error
})

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodosRequest())
        return fetch('./mock/todos.json').then(
            res => {
                res.json().then(data => {
                    dispatch(fetchTodosSuccess(data))
                })
            }
        )
        .catch(
            err => {
                console.log("an error occurred: " + err)
                dispatch(fetchTodosFailure(err))
            }
        )
        // return fetch('./mock/todos.json').then(
        //     res => {
        //         res.json().then(data => {
        //             dispatch(fetchTodosSuccess(data))
        //         })
        //     },
        //     err => {
        //         console.log("an error occurred: " + err)
        //         dispatch(fetchTodosFailure(err))
        //     }
        // )
    }
}

// var AddTodoAction = {
//     type: 'ADD_TODO',
//     text: '学习react',
//     id: 1
// }
let nextTodoId = 1
/**
 * 新增待办事项
 * */ 
export const addTodo = (text) => ({
    type: ADD_TODO,
    text,
    id: nextTodoId++
})

/**
 * 更改待办事项
 * */ 

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

/**
 * 设置过滤状态
 * */ 

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
})

/**
 * 设置新增待办的文本信息
 * */ 

export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text
})
