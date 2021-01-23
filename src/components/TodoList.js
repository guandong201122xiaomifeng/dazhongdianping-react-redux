import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  componentDidMount(){
    this.props.fetchTodos();
  }
  render() {
    const { todos=[], toggleTodo } = this.props;
    return (
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              onClick={() => {
                toggleTodo(todo.id);
              }}
              key={todo.id}
              {...todo}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
