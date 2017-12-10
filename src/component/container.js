//container

import React from 'react'

import Header from './header'
import LeftSide from './leftside'


class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render(){
        return (
            <div id="container">
                <Header/>
                <div>
                    <LeftSide />
                </div>
            </div>
        )
    }
}

export default Container