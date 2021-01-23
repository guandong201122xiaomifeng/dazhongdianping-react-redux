import { connect } from 'react-redux'
import { addTodo, setTodoText } from '../actions'
import AddTodo from '../components/AddTodo'
import { getText } from '../selectors'

const mapStateToProps = (state) => ({
    text: getText(state)
})
const mapDispatchToProps = (dispatch) => ({
    addTodo: text => {
        dispatch(addTodo(text))
    },
    setTodoText: text => {
        dispatch(setTodoText(text))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)