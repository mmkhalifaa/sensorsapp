import React, { Component } from "react";
import ReactHighcharts from "react-highcharts";

const setChartName = (chart) => { 
    return fetch("/api/sensors/")
        .then((response) => response.json())
        .then((responseJson) => {
          chart.series[0].name = responseJson[0].name;
          chart.series[1].name = responseJson[1].name;
          chart.series[2].name = responseJson[2].name;
        });
};

const loadChartData = (chart, id, series) => {
     return fetch("/api/sensors/" + id)
        .then((response) => response.json())
        .then((responseJson) => {
            getChartsData(responseJson, chart, series);
        });
};

const getChartsData = (data, chart, series) => {
    var sensorsData = [];
    for (var i = 0; i < data.length; i++) {
        // check if time within last 5 minutes
        if (data[i].time > (data[0].time - 300)) {
            // need to multiply by 1000 to get the right epoch time for highcharts
            sensorsData.push({ x: data[i].time*1000, y: data[i].value });
        }
    }
    chart.series[series].setData(sensorsData);
};

// highcharts config 

const config = {
    chart: {
            events: {
                load: loadChartData,
            },
        },
    title: {
        text: "Last 5 minutes of Sensors data",
    },
    xAxis: {
        type: "datetime",
    },
    yAxis: {
            plotLines: [{
                value: 0,
                width: 1,
                color: "#808080",
            }],
        },  
    series: [{
        }, {
        }, {
        }],
};

class SensorsCharts extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let chart = this.refs.chart.getChart();
        setChartName(chart);
        loadChartData(chart, "46c634d04cc2fb4a4ee0f1596c5330328130ff80", 0);
        loadChartData(chart, "d823cb4204c9715f5c811feaabeea45ce06736a0", 1);
        loadChartData(chart, "437b3687100bcb77959a5fb6d0351b41972b1173", 2);
    }

    render() {
        return <ReactHighcharts config={config} ref="chart">
        </ReactHighcharts>;
    }
}

export default SensorsCharts;

