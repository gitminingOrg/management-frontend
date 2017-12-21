import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'

//import component
import Container from './component/container'
import HomePage from './component/homePage'
import MachineStatistics from './component/machine'
import QRcodeStatistics from './component/qrcode'

// import './event/util'
import './event/nav'

//import style
import './style/header.css'
import './style/leftside.css'
import './style/pageTitle.css'
import './style/homePage.css'
import './style/mainpanel.css'
import './style/machine.css'

// font css
require('font-awesome/css/font-awesome.min.css');
require('typeface-oswald');

ReactDOM.render(
    <HashRouter>
        <Container>
            <Route path='/dashboard' component={HomePage}/>
            <Route path='/machine/view' component={MachineStatistics} />
            <Route path='/qrcode/view' component={QRcodeStatistics} />
        </Container>
    </HashRouter>,
    document.getElementById('app')
);


