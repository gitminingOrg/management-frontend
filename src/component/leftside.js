//left side bar
import React from 'react'


function detailCategoryClick(e) {
    e.preventDefault();
    let node = e.target;
    let category = node.parentNode.parentNode.parentNode.firstChild.firstChild.childNodes[1].innerHTML;
    let detail = node.innerHTML;

    changeNavTitle(category, detail);
}

//init nav title
function homeClick(e) {
    e.preventDefault();
    let navTitle = document.getElementById("navbar-title");

    navTitle.innerHTML = "<span class=\"fa fa-home\"/>";
    navTitle.innerHTML += "主页";
}

function changeNavTitle(category, detail) {
    let navTitle = document.getElementById("navbar-title");

    let angleSpan = "<span class=\"fa fa-angle-right page-title-arrow\" />";

    navTitle.innerHTML = "<span class=\"fa fa-home\"/>";
    navTitle.innerHTML += "主页";
    switch (category) {
        case "主页":
            break;
        case "二维码":
            navTitle.innerHTML += angleSpan;
            navTitle.innerHTML += "<span class=\"fa fa-qrcode\"/>";
            break;
        case "机器":
            navTitle.innerHTML += angleSpan;
            navTitle.innerHTML += "<span class=\"fa fa-laptop\"/>";
            break;
        case "客户":
            navTitle.innerHTML += angleSpan;
            navTitle.innerHTML += "<span class=\"fa fa-user\"/>";
            break;
        case "订单":
            navTitle.innerHTML += angleSpan;
            navTitle.innerHTML += "<span class=\"fa fa-file-text-o\"/>";
            break;
        case "设置":
            navTitle.innerHTML += angleSpan;
            navTitle.innerHTML += "<span class=\"fa fa-gear\"/>";
            break;
        default:
            break;
    }
    navTitle.innerHTML += category;
    navTitle.innerHTML += angleSpan;
    navTitle.innerHTML += detail;
}

function handleClick(e) {
    e.preventDefault();

    // alert(e.target.tagName);

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
                        <span>二维码</span>
                        <span className="fa fa-plus last-child"/>
                    </i>
                </a>
                <ul className="nav-sub">
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={detailCategoryClick}>二维码统计</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={detailCategoryClick}>生成二维码</a>
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
                <a href="javascript:" className="nav-link with-sub" onClick={handleClick}>
                    <i className="icon icon-machine">
                        <span className="fa fa-laptop first-child"/>
                        <span>机器</span>
                        <span className="fa fa-plus last-child"/>
                    </i>
                </a>
                <ul className="nav-sub">
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={detailCategoryClick}>型号概览</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={detailCategoryClick}>机器部件</a>
                    </li>
                </ul>
            </li>
        )
    }
}

class Consumer extends React.Component{
    render() {
        return (
            <li className="nav-item nav-link with-sub">
                <a href="javascript:" className="nav-link with-sub" onClick={handleClick}>
                    <i className="icon icon-consumer">
                        <span className="fa fa-user first-child"/>
                        <span>客户</span>
                        <span className="fa fa-plus last-child"/>
                    </i>
                </a>
                <ul className="nav-sub">
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={detailCategoryClick}>用户设备</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={detailCategoryClick}>分享码</a>
                    </li>
                </ul>
            </li>
        )
    }
}

class Order extends React.Component{
    render() {
        return(
            <li className="nav-item nav-link with-sub">
                <a href="javascript:" className="nav-link with-sub" onClick={handleClick}>
                    <i className="icon icon-order">
                        <span className="fa fa-file-text-o first-child"/>
                        <span>订单</span>
                        <span className="fa fa-plus last-child"/>
                    </i>
                </a>
                <ul className="nav-sub">
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={detailCategoryClick}>添加订单</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={detailCategoryClick}>淘宝订单</a>
                    </li>
                </ul>
            </li>
        )
    }
}

class Settings extends React.Component{
    render() {
        return(
            <li className="nav-item nav-link with-sub">
                <a href="javascript:" className="nav-link with-sub" onClick={handleClick}>
                    <i className="icon icon-gear">
                        <span className="fa fa-gear first-child"/>
                        <span>设置</span>
                        <span className="fa fa-plus last-child"/>
                    </i>
                </a>
                <ul className="nav-sub">
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={detailCategoryClick}>密码修改</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={detailCategoryClick}>权限控制</a>
                    </li>
                </ul>
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
                                <a href="javascript:" className="nav-link" onClick={homeClick}>
                                    <i className="icon icon-home">
                                        <span className="fa fa-home first-child"/>
                                        <span>主页</span>
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
