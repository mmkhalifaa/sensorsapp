import { Col, Row, Grid, Button } from "react-bootstrap";

const Card = () => (
    <Grid>
        <Row>
            <Col xs={6} md={4}>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
            </Col>
        </Row>
    </Grid>
);

export default Card;

