import { connect } from "react-redux";
// connect是个高阶函数
import TodoList from "../components/TodoList";
import { toggleTodo, fetchTodos } from "../actions/index";
import { getVisibleTodos } from '../selectors'
// 抽到selector里面去
// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case "all":
//       return todos;
//     case "active":
//       return todos.filter((t) => !t.completed);
//     case "completed":
//       return todos.filter((t) => t.completed);
//     default:
//       return new Error("Unknow filter: ", filter);
//   }
// };
// 把store的state映射到props
// state为store中全局state, 函数的返回值就是props
const mapStateToProps = (state) => ({
  // todos: getVisibleTodos(state.todos, state.filter),
  // 异步获取todos，state结构发生了变化
  todos: getVisibleTodos(state)
});
// 把store的dispatch(action)映射到props
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => {
    dispatch(toggleTodo(id));
  },
  fetchTodos: () => {
    dispatch(fetchTodos())
  }
});

// connect()返回的是一个函数
// react需要从redux中获取state,和 action
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
