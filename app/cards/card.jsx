import React, { Component } from "react";
import { Col, Thumbnail } from "react-bootstrap";
import moment from "moment";
import "../../style/main.scss";


class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sensor: { time: "", value: "Hello" },
        };

        fetch("/api/sensors")
            .then((response) => response.json())
            .then((responseJson) => {
                for (var i = 0; i < responseJson.length; ++i) {
                    if (this.props.id === responseJson[i].id) {
                        this.setState({
                              sensorName: responseJson[i].name ,
                        });
                    }
                }
            });
    }

    componentDidMount() {
        fetch("/api/sensors/" + this.props.id)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    sensor: { time: responseJson[0].time, value: responseJson[0].value },
                });
            });
    }

    render() {
        const { sensor } = this.state;
        const { sensorName } = this.state;
        return <Col xs={6} md={4}>
            <Thumbnail className="sensors">
                <h3>{sensorName}</h3>
                <h2>{sensor.value}</h2>
                <p>Last updated: {moment.unix(sensor.time).format("dddd, MMMM Do, YYYY h:mm:ss A")}
                </p>
            </Thumbnail>
        </Col>;
    }
}

export default Card;

