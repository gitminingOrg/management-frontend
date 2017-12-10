//left side bar
import React from 'react'

class LeftSide extends React.Component{
    render(){
        return(
            <div className="sideleft">
                <div className="nav sideleft-tab" />
                <div className="tab-content">
                    <div id="mainMenu" className="tab-pane active">
                        <ul className="sideleft-menu">
                            <li className="nav-item nav-link">
                                <a href="javascript:" className="nav-link">
                                    <i className="icon icon-home">
                                        <span className="fa fa-home first-child"/>
                                        <span>Dashboard</span>
                                    </i>
                                </a>
                            </li>
                            <li className="nav-item nav-link with-sub">
                                <a href="javascript:" className="nav-link with-sub">
                                    <i className="icon icon-qrcode">
                                        <span className="fa fa-qrcode first-child"/>
                                        <span>Qrcode</span>
                                        <span className="fa fa-plus last-child"/>
                                    </i>
                                    <ul className="nav-sub">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">生成二维码</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">生成二维码</a>
                                        </li>
                                    </ul>
                                </a>
                            </li>
                            <li className="nav-item nav-link with-sub">
                                <a href="javascript:" className="nav-link with-sub">
                                    <i className="icon icon-machine">
                                        <span className="fa fa-laptop first-child"/>
                                        <span>Machine</span>
                                        <span className="fa fa-plus last-child"/>
                                    </i>
                                </a>
                            </li>
                            <li className="nav-item nav-link with-sub">
                                <a href="javascript:" className="nav-link with-sub">
                                    <i className="icon icon-consumer">
                                        <span className="fa fa-user first-child"/>
                                        <span>Consumer</span>
                                        <span className="fa fa-plus last-child"/>
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftSide;
