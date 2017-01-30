import React from "react";
import { Row, Grid } from "react-bootstrap";
import SensorsCharts from "../charts/charts";
import Card from "../cards/card";

const Sensors = () => (
    <Grid>
        <Row>
                <Card id={"46c634d04cc2fb4a4ee0f1596c5330328130ff80"}/>
                <Card id={"d823cb4204c9715f5c811feaabeea45ce06736a0"}/>
                <Card id={"d823cb4204c9715f5c811feaabeea45ce06736a0"}/>
                <SensorsCharts />
        </Row>
    </Grid>
);

export default Sensors;

