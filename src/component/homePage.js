import React from 'react'
import ReactEcharts from 'echarts-for-react'
import $ from 'jquery'

const url = 'http://localhost:8080';

class CardDigit extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        const information = this.props.information;
        let borderColor = null;
        if (information.id === "machine") {
            borderColor = {"borderColor": "#FB9337", "backgroundColor": "#FB9337"};
        } else if (information.id === "qrcode") {
            borderColor = {"borderColor": "#17A2B8", "backgroundColor": "#17A2B8"};
        } else if (information.id === "consumer") {
            borderColor = {"borderColor": "#28A745", "backgroundColor": "#28A745"};
        } else if (information.id === "order") {
            borderColor = {"borderColor": "#00b297", "backgroundColor": "#00b297"};
        }
        return (
            <div className="col-lg-3">
                <div className="card">
                    <div id={information.id} className="wd-100p ht-180 rick">
                    </div>
                    <div className="overlay-body pd-x-20">
                        <div className="d-flex justify-content-between item-align-center h-60">
                            <div>
                                <p className="tx-inverse tx-bold">
                                    {information.name}
                                </p>
                            </div>
                            <a href={information.target}>
                                <span className="fa fa-ellipsis-h tx-20" />
                            </a>
                        </div>
                        <div className="item-vertical-center">
                            <button className="mg-b-5 tx-lato item-vertical-center tx-30 circle" style={borderColor}>
                                {information.value}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class MachineECharts extends React.Component {

    constructor() {
        super();
    }

    getOption() {
        let dateMap = new Map();
        let deviceChipList = this.props.data;
        for (let i = 0; i < deviceChipList.length; i++) {
            let updateDate = new Date(deviceChipList[i].updateTime);
            let year = updateDate.getFullYear();
            let month = updateDate.getMonth();
            let key = year.toString() + "-" + (month < 10 ? '0' + month.toString() : month.toString());
            if (dateMap.has(key)){
                dateMap.set(key, dateMap.get(key) + 1);
            } else {
                dateMap.set(key, 1);
            }
        }
        let dateArray = Array.from(dateMap.keys());
        dateArray.sort();
        let valueArray = [];
        for (let i = 0; i < dateArray.length; i++) {
            valueArray.push(dateMap.get(dateArray[i]));
        }
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
        return(
            <ReactEcharts option={this.getOption()} notMerge={true} lazyUpdate={true}/>
        )
    }
}

class QrcodeECharts extends React.Component {
    getOption() {
        return {
            color: ["#ff2d78", "#04aec6", "#4c418b"],
            legend: {
                orient: 'horizontal',
                x: 'center',
                y: 'bottom',
                data:['未使用','已出库','已扫描']
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series:{
                hoverAnimation: true,
                radius: ['40%', '70%'],
                type: 'pie',
                data: [
                    {name: "未使用", value: this.props.data.num - this.props.data.delivered - this.props.data.occupied},
                    {name: '已出库', value: this.props.data.delivered},
                    {name: '已扫描', value: this.props.data.occupied}
                ],
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
            }
        }
    }

    render() {
        return (
            <ReactEcharts option={this.getOption()} notMerge={true} lazyUpdate={true}/>
        )
    }
}

class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {
            machine: [],
            qrcode: {},
            consumer: [],
            order: []
        };
    }

    componentDidMount(){
        let machineUrl = url + "/management/machine/device/status/";
        let qrcodeUrl = url + "/management/qrcode/batch/available/";
        let consumerUrl = url + "/management/";
        let orderUrl = url + "/management/order/list";

        $.get(machineUrl, function (res) {
            if (res.responseCode === "RESPONSE_OK") {
                this.setState({machine: res.data})
            }
        }.bind(this));
        $.get(qrcodeUrl, function (res) {
            if (res.responseCode === "RESPONSE_OK") {
                this.setState({qrcode: res.data});
                let qrcode = {num: 0, delivered: 0, occupied: 0};
                for (let i = 0; i < res.data.length; i++) {
                    qrcode.num += res.data[i].num;
                    qrcode.delivered += res.data[i].delivered;
                    qrcode.occupied += res.data[i].occupied;
                }
                this.setState({qrcode: qrcode});
            }
        }.bind(this));
    }

    render() {
        let machineInfo = {"id": "machine", "name": "机器总量", "target": "/#/machine/view", "value": this.state.machine.length};
        let qrcodeInfo = {"id": "qrcode", "name": "二维码总量", "target": "/#/qrcode/view", "value": this.state.qrcode.num};
        let consumerInfo = {"id": "consumer", "name": "客户人数", "target": "/#/consumer/view", "value": "66"};
        let orderInfo = {"id": "order", "name": "订单数目", "target": "/#/order/view", "value": "66"};
        return (
            <div className="pagebody">
                <div className="row row-sm">
                    <CardDigit information = {machineInfo}/>
                    <CardDigit information = {qrcodeInfo}/>
                    <CardDigit information = {consumerInfo}/>
                    <CardDigit information = {orderInfo}/>
                </div>
                <div className="row row-sm mg-t-15 mg-sm-t-20">
                    <div className="col-md-6">
                        <div className="card card-with-border">
                            <p className="card-body-title">机器安装数量</p>
                            <MachineECharts data={this.state.machine}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card card-with-border">
                            <p className="card-body-title">二维码数量</p>
                            <QrcodeECharts data = {this.state.qrcode}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;