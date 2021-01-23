import { 
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from "../actions/actionTypes";

const initialState = {
  isFetching: false, //是否正在发送请求
  data: [], //数据
  error: null //错误信息
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return {
        ...state,
        isFetching: false,
        data: todos(state.data, action) //原来的reducer todos变成子reducer
      }
  }
}

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
export default reducer;
