import React, { Component } from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AddTodoContainer from "./containers/AddTodoContainer";
import FooterContainer from "./containers/FooterContainer";
import TodoListContainer from "./containers/TodoListContainer";

// router使用的组件
import Home from "./route-components/Home";
import About from "./route-components/About";
import Contact from "./route-components/Contact";
import User from "./route-components/User";
// 已经把对状态的处理逻辑给挪到react-redux中了
class AppWithContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  changeNum() {
    setInterval(() => {
      this.setState({
        num: this.state.num + 1,
      });
    }, 1000);
  }
  componentDidMount() {
    this.changeNum();
  }
  render() {
    return (
      <Router>
        <div>
          <AddTodoContainer />
          <TodoListContainer />
          <FooterContainer />
          <div>{this.state.num}</div>
          {/* <Switch> */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/user/:user" component={User} />
          <Route path="/:user" component={User} /> */}
          <Route path="/user" component={User} />
          {/* <Route path="/" exact component={() => <Home/>} /> */}
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route
            path="/contact"
            children={(props) => (
              <div>{props.match ? "active" : "inactive"} </div>
            )}
          />
          {/* component={Contact} */}
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default AppWithContainer;
