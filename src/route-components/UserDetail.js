import React, { Component } from 'react';

class UserDetail extends Component {
    render() {
        const {match} = this.props
        return (
            <div>
                {match.params.user}
            </div>
        );
    }
}

export default UserDetail;