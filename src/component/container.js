//container

import React from 'react'

import Header from './header'
import LeftSide from './leftside'
import PageTitle from './pageTitle'
import HomePage from './homePage'


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
                <LeftSide />
                <div className="main-panel">
                    <PageTitle/>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Container