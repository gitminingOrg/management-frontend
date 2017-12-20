import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'

//import component
import Container from './component/container'
import HomePage from './component/homePage'
import MachineStatistics from './component/machine'

import './event/util'

//import style
import './style/header.css'
import './style/leftside.css'
import './style/pageTitle.css'
import './style/homePage.css'
import './style/mainpanel.css'
import './style/machine.css'

// font css
require('font-awesome/css/font-awesome.min.css');

ReactDOM.render(
    <HashRouter>
        <Container>
            <Route path='/dashboard' component={HomePage}/>
            <Route path='/machine/view' component={MachineStatistics}/>
        </Container>
    </HashRouter>,
    document.getElementById('app')
);


