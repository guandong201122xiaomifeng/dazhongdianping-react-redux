import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.setTodoText(e.target.value)
  };
  handleClick = ()=> {
      this.props.addTodo(this.props.text)
  }
  render() {
    return (
      <div>
        <input value={this.props.text} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>添加</button>
      </div>
    );
  }
}

export default AddTodo;
