import { ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes";

// 这里的state不是所有的state,而是todos这一项而已，不需要关系其他state项
const todos = (state=[], action) => {
  switch (action.type) {
    case ADD_TODO:
        return [
            ...state,
            {
                text: action.text,
                id: action.id,
                completed: false,
            }
        ]
    //   return {
    //     ...state,
    //     todos: [
    //       ...state.todos,
    //       {
    //         text: action.text,
    //         id: action.id,
    //         completed: false,
    //       },
    //     ],
    //   };
    case TOGGLE_TODO:
        return state.map((todo) => {
            if (todo.id === action.id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            } else {
              return todo;
            }
          })
    //   return {
    //     ...state,
    //     todos: state.todos.map((todo) => {
    //       if (todo.id === action.id) {
    //         return {
    //           ...todo,
    //           completed: !todo.completed,
    //         };
    //       } else {
    //         return todo;
    //       }
    //     }),
    //   };
    default:
        return state
  }
};
export default todos;
