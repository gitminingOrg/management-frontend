import React from 'react'

class PageTitle extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        let currentLocation = window.location.href;
        if (currentLocation.endsWith('/')) {
            currentLocation = currentLocation.substr(0, currentLocation.length - 1);
        }
        let tempArray = currentLocation.split("/");
        let category = tempArray.slice(-2)[0];
        let detail = tempArray.slice(-1)[0];

        let angleSpan = "<span class=\"fa fa-angle-right page-title-arrow\"/>";

        let navTitle = document.getElementById("navbar-title");
        navTitle.innerHTML = "<span class=\"fa fa-home\"/>主页";

        if (detail !== "dashboard") {
            if (category === "qrcode") {
                navTitle.innerHTML += angleSpan;
                navTitle.innerHTML += "<span class=\"fa fa-qrcode\"/>二维码";
                if (detail === "view") {
                    navTitle.innerHTML += angleSpan;
                    navTitle.innerHTML += "二维码统计";
                }
            }
            else if (category === "machine") {
                navTitle.innerHTML += angleSpan;
                navTitle.innerHTML += "<span class=\"fa fa-laptop\"/>机器";
                if (detail === "view") {
                    navTitle.innerHTML += angleSpan;
                    navTitle.innerHTML += "机器统计";
                }
            } else if (category === "consumer") {
                navTitle.innerHTML += angleSpan;
                navTitle.innerHTML += "<span class=\"fa fa-user\"/>客户";
                if (detail === "view") {
                    navTitle.innerHTML += angleSpan;
                    navTitle.innerHTML += "客户统计";
                }
            } else if (category === "order"){
                navTitle.innerHTML += angleSpan;
                navTitle.innerHTML += "<span class=\"fa fa-laptop\"/>订单";
                if (detail === "view") {
                    navTitle.innerHTML += angleSpan;
                    navTitle.innerHTML += "订单统计";
                }
            }
        }
    }

    render() {
        return(
            <div className="pagetitle">
                <h5 id="navbar-title" className="title">
                </h5>

            </div>
        )
    }
}


export default PageTitle