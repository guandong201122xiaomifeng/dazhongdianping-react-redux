import React, { Component } from "react";
import { Route } from "react-router-dom";
import UserDetail from "./UserDetail";
class User extends Component {
  render() {
    const { match } = this.props;
    // console.log('route match: ',match)
    return (
      <div>
        user: {match.params.user}
        多一个route
        <Route path={`${match.path}/:user`} component={UserDetail} />
      </div>
    );
  }
}

export default User;
