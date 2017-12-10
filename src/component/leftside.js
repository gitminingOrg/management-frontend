//left side bar
import React from 'react'


function handleClick(e) {
    e.preventDefault();

    let tagName = e.target.tagName.toLowerCase();
    let targetNode = e.target;
    if (tagName=== "span") {
        targetNode = targetNode.parentNode.parentNode;
    }

    let spanLastChild = targetNode.firstChild.lastChild;
    let ul = targetNode.parentNode.lastChild;
    let className = targetNode.className;

    //if not show sub items
    if (className.toString().indexOf("show-sub") === -1) {
        className = className.toString().concat(" show-sub");
        ul.style.display = 'block';
        spanLastChild.className = "fa fa-minus last-child";
    } else {
        className = className.toString().replace("show-sub", "");
        ul.style.display = 'none';
        spanLastChild.className = "fa fa-plus last-child";
    }

    targetNode.className = className;
}

class Qrcode extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return(
            <li className="nav-item nav-link with-sub">
                <a href="javascript:" className="nav-link with-sub" onClick={handleClick}>
                    <i className="icon icon-qrcode">
                        <span className="fa fa-qrcode first-child"/>
                        <span>Qrcode</span>
                        <span className="fa fa-plus last-child"/>
                    </i>
                </a>
                <ul className="nav-sub">
                    <li className="nav-item">
                        <a href="#" className="nav-link">二维码统计</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">生成二维码</a>
                    </li>
                </ul>
            </li>
        )
    }
}

class Machine extends React.Component{
    render() {
        return (
            <li className="nav-item nav-link with-sub">
                <a href="javascript:" className="nav-link with-sub">
                    <i className="icon icon-machine">
                        <span className="fa fa-laptop first-child"/>
                        <span>Machine</span>
                        <span className="fa fa-plus last-child"/>
                    </i>
                </a>
            </li>
        )
    }
}

class Consumer extends React.Component{
    render() {
        return (
            <li className="nav-item nav-link with-sub">
                <a href="javascript:" className="nav-link with-sub">
                    <i className="icon icon-consumer">
                        <span className="fa fa-user first-child"/>
                        <span>Consumer</span>
                        <span className="fa fa-plus last-child"/>
                    </i>
                </a>
            </li>
        )
    }
}

class Order extends React.Component{
    render() {
        return(
            <li className="nav-item nav-link with-sub">
                <a href="javascript:" className="nav-link with-sub">
                    <i className="icon icon-order">
                        <span className="fa fa-file-text-o first-child"/>
                        <span>Order</span>
                        <span className="fa fa-plus last-child"/>
                    </i>
                </a>
            </li>
        )
    }
}

class Settings extends React.Component{
    render() {
        return(
            <li className="nav-item nav-link with-sub">
                <a href="javascript:" className="nav-link with-sub">
                    <i className="icon icon-gear">
                        <span className="fa fa-gear first-child"/>
                        <span>Setting</span>
                        <span className="fa fa-plus last-child"/>
                    </i>
                </a>
            </li>
        )
    }
}


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
                            <Qrcode/>
                            <Machine/>
                            <Consumer/>
                            <Order/>
                            <Settings/>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftSide;
