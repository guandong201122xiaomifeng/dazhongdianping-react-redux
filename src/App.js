import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: "all",
    };
    this.nextTextId = 0;
  }
  getVisibleTodos = () => {
    const currentFilter = this.state.filter;
    return this.state.todos.filter((item) => {
      if (currentFilter === "active") {
        return !item.completed;
      } else if (currentFilter === "completed") {
        return item.completed;
      } else {
        return true;
      }
    });
  };
  addTodo = (text) => {
    const todo = {
      text,
      id: this.nextTextId++,
      completed: false,
    };
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };
  toggleTodo = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    this.setState({
      todos: newTodos,
    });
  };
  setVisibilityFilter = (filter) => {
    this.setState({
      filter,
    });
  };
  render() {
    const todos = this.getVisibleTodos();
    const { filter } = this.state;
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={todos} toggleTodo={this.toggleTodo} />
        <Footer
          filter={filter}
          setVisibilityFilter={this.setVisibilityFilter}
        />
      </div>
    );
  }
}

export default App;
