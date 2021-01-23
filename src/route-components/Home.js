import React, { Component } from 'react';

class Home extends Component {
    render() {
        // console.log('Home props', this.props)
        return (
            <div>
                home
            </div>
        );
    }
    componentWillUnmount(){
        // console.log('Home will unmount')
    }
}

export default Home;