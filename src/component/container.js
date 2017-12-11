//container

import React from 'react'

import Header from './header'
import LeftSide from './leftside'
import PageTitle from './pageTitle'


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
                    <div>
                        <PageTitle/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container