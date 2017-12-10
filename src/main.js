import React from 'react'
import ReactDOM from 'react-dom'

//import component
import Container from './component/container'

//import style
import './style/header.css'
import './style/leftside.css'

require('font-awesome/css/font-awesome.min.css');

ReactDOM.render(
    <Container/>,
    document.getElementById('app')
);


