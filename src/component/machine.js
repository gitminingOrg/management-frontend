import React from 'react'
// import ReactEcharts from 'echarts-for-react'
import $ from 'jquery'

const url = 'http://localhost:8080';

class MachineCard extends React.Component {
    render() {
        let background = {backgroundColor: this.props.info.color};
        return(
            <div className="col-lg-4 pad-rl-20">
                <div className="card">
                    <div className="wd-100p ht-200 ">
                        <div className="machine-card-title">
                            <button className="machine-status-circle" style={background} />
                        </div>
                        <div className="machine-card-content">
                            <div className="machine-value">{this.props.info.num}</div>
                            <div className="machine-card-text">{this.props.info.text}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CardRow extends React.Component {

    render() {
        let machineStatusData = this.props.data;
        let onlineMachine = 0, offLineMachine = 0, idleMachine = 0;
        for (let i = 0; i < machineStatusData.length; i++) {
            if (machineStatusData[i].status.toUpperCase() === 'ONLINE'){
                onlineMachine++;
            } else if (machineStatusData[i].status.toUpperCase() === 'OFFLINE') {
                offLineMachine++;
            } else if (machineStatusData[i].status.toUpperCase() === 'IDLE') {
                idleMachine++;
            }
        }
        let machineInfo = {
            online: {num: onlineMachine, text: 'machine online', color: '#89e07d'},
            offline: {num: offLineMachine, text: 'machine offline', color: '#c9c9c9'},
            idle: {num: idleMachine, text: 'machine idle', color: '#ff2d78'}
        };
        return(
            <div className="row">
                <MachineCard info = {machineInfo.online}/>
                <MachineCard info = {machineInfo.offline}/>
                <MachineCard info = {machineInfo.idle}/>
            </div>
        )
    }
}

function handleData(data, type='month') {

}

class MachineEcharts extends React.Component {

    getOption() {

        return {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data:['安装数']
            },
            xAxis: {
                data: dateArray
            },
            yAxis: {},
            series: [{
                name: "安装数",
                type: 'line',
                data: valueArray
            }]
        };
    }

    render() {

    }
}

class MachineStatistics extends React.Component{

    constructor(){
        super();
        this.state = {machine: []};
    }

    componentDidMount() {
        let machineUrl = url + "/management/machine/device/status/";
        $.get(machineUrl, function (res) {
            if (res.responseCode === "RESPONSE_OK") {
                this.setState({machine: res.data});
            }
        }.bind(this))
    }

    render() {
        return (
            <div className="machine-body">
                <div className="row">
                    <h5></h5>
                </div>
                <CardRow data={this.state.machine}/>
                {/*<MachineEcharts data={this.state.machine}/>*/}
                <div className="row">
                    <div className="div-border div-ht-20" />
                </div>
            </div>
        )
    }
}


export default MachineStatistics;