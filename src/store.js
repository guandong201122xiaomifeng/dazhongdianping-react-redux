import {createStore} from 'redux'
import rootReducer from './reducers'
import {addTodo, toggleTodo, setFilter, setTodoText} from './actions/index'

const store = createStore(rootReducer)

console.log('获取state', store.getState())

const unsubscribe = store.subscribe(() => {
    // console.log('subscribe arguments', arguments)
    console.log('订阅', store.getState())
})

/**
 * 
 * 只要dispatch正常分发，就会触发订阅的函数store.subscribe(fun)中的fun
*/
store.dispatch(addTodo('dispatch添加'))
store.dispatch(toggleTodo(1))
store.dispatch(setFilter('active'))
store.dispatch(setTodoText('setTodoText'))
store.dispatch({
    type:'abc'
})

// 取消订阅
console.log('unsubscribe', unsubscribe)
unsubscribe()
