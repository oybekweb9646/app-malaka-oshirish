import React from 'react';
import {Col, Container, Row} from "reactstrap";

const LogosPart = () => {
    return (
        <div className="logosPart py-4">
<Container>
    <Row>
        <Col lg="12" className="mb-1">
           <h4 className="textcolor text-center">5000+ директоров    по всему Узбекистану используют наш <br/> сервис для улучшения своих знаний</h4>
        </Col>
        <Col className="text-center my-3">
            <img src="images/leath.png" alt=""/>
        </Col>
        <Col className="text-center my-3">
            <img src="images/seal.png" alt=""/>
        </Col>
        <Col className="text-center my-3">
            <img src="images/leath.png" alt=""/>
        </Col>
        <Col className="text-center my-3">
            <img src="images/seal.png" alt=""/>
        </Col>
        <Col className="text-center my-3">
            <img src="images/leath.png" alt=""/>
        </Col>


    </Row>
</Container>
        </div>
    );
};

export default LogosPart;