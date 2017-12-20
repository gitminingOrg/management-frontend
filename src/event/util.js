import ResizeSensor from 'resize-sensor'
import $ from 'jquery'
import Rickshaw from 'rickshaw'

$(function(){

    var rs1 = new Rickshaw.Graph({
        element: document.getElementById('machine'),
        renderer: 'area',
        max: 100,
        width: document.getElementById('machine').offsetWidth,
        stroke: true,
        series: [{
            data: [
                { x: 0, y: 20 },
                { x: 1, y: 10 },
                { x: 2, y: 15 },
                { x: 3, y: 10 },
                { x: 4, y: 15 },
                { x: 5, y: 5 },
                { x: 6, y: 15 },
                { x: 7, y: 10 },
                { x: 8, y: 20 },
                { x: 9, y: 25 },
                { x: 10, y: 35 }
            ],
            color: '#fdc390',
            stroke: '#FB9337'
        }]
    });
    rs1.render();



    let rs2 = new Rickshaw.Graph({
        element: document.getElementById('qrcode'),
        renderer: 'area',
        max: 100,
        width: document.getElementById('qrcode').offsetWidth,
        stroke: true,
        series: [{
            data: [
                { x: 0, y: 10 },
                { x: 1, y: 15 },
                { x: 2, y: 18 },
                { x: 3, y: 15 },
                { x: 4, y: 20 },
                { x: 5, y: 10 },
                { x: 6, y: 15 },
                { x: 7, y: 10 },
                { x: 8, y: 20 },
                { x: 9, y: 25 },
                { x: 10, y: 30 }
            ],
            color: '#8bd0db',
            stroke: '#17A2B8'
        }]
    });
    rs2.render();



    let rs3 = new Rickshaw.Graph({
        element: document.getElementById('consumer'),
        renderer: 'area',
        max: 100,
        width: document.getElementById('consumer').offsetWidth,
        stroke: true,
        series: [{
            data: [
                { x: 0, y: 20 },
                { x: 1, y: 10 },
                { x: 2, y: 15 },
                { x: 3, y: 10 },
                { x: 4, y: 15 },
                { x: 5, y: 5 },
                { x: 6, y: 15 },
                { x: 7, y: 10 },
                { x: 8, y: 20 },
                { x: 9, y: 25 },
                { x: 10, y: 20 }
            ],
            color: '#a5ecb5',
            stroke: '#28A745'
        }]
    });
    rs3.render();

    let rs4 = new Rickshaw.Graph({
        element: document.getElementById('order'),
        renderer: 'area',
        max: 100,
        width: document.getElementById('order').offsetWidth,
        stroke: true,
        series: [{
            data: [
                { x: 0, y: 10 },
                { x: 1, y: 15 },
                { x: 2, y: 10 },
                { x: 3, y: 5 },
                { x: 4, y: 10 },
                { x: 5, y: 5 },
                { x: 6, y: 10 },
                { x: 7, y: 15 },
                { x: 8, y: 20 },
                { x: 9, y: 10 },
                { x: 10, y: 15 }
            ],
            color: '#c0ecdc',
            stroke: '#00b297'
        }]
    });
    rs4.render();

    $(window).on('resize', function () {
        rs1.configure(
            {
                width: document.getElementById('machine').offsetWidth,
                height: document.getElementById('machine').offsetHeight
            }
        );
        rs1.render();
    });
    $(window).on('resize', function () {
        rs2.configure(
            {
                width: document.getElementById('qrcode').offsetWidth,
                height: document.getElementById('qrcode').offsetHeight
            }
        );
        rs2.render();
    });
    $(window).on('resize', function () {
        rs3.configure(
            {
                width: document.getElementById('consumer').offsetWidth,
                height: document.getElementById('consumer').offsetHeight
            }
        );
        rs3.render();
    });
    $(window).on('resize', function () {
        rs4.configure(
            {
                width: document.getElementById('order').offsetWidth,
                height: document.getElementById('order').offsetHeight
            }
        );
        rs4.render();
    });
});
