import React from 'react'

class DashboradSpan extends React.Component {

    render() {
        return(
            <span className="fa fa-home" />
        )
    }
}


class PageTitle extends React.Component {

    render() {
        return(
            <div className="pagetitle">
                <h5 id="navbar-title" className="title">
                    <span className="fa fa-home"/>
                    主页
                </h5>

            </div>
        )
    }
}


export default PageTitle