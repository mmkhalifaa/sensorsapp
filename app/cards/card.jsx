import React, { Component } from "react";
import { Col, Thumbnail, Button } from "react-bootstrap";
import "../../style/main.scss";

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sensor: { time: "", value: "Hello" },
        };
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
        return <Col xs={6} md={4}>
            <Thumbnail>
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <div>{sensor.value}</div>
            </Thumbnail>
        </Col>;
    }
}

export default Card;

