import React from 'react';
import {Card, Col, Container, Row} from "reactstrap";

const IconsPart = () => {
    return (
        <div className="iconsPart">
            <Container>
                <Row>
                    <Col lg="12" className="text-center pt-5">
                        <h4 className="font-weight-bold">Все продуманно для Вашего удобства</h4>
                        <p className="mb-5">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать <br/> несколько абзацев более менее осмысленного текста рыбы на русском языке.</p>
                    </Col>
                    <Col lg="3">
                        <img src="images/IconsOne.png" alt=""/>
                        <h5 className="mt-3">Легко используемый интерфейс</h5>
                        <p>Сайт рыбатекст поможет вам и дизайнеру, версталь, вебмастеру сгенерировать несколько абзацев</p>
                    </Col>
                    <Col lg="3">
                        <img src="images/iconsTwo.png" alt=""/>
                        <h5 className="mt-3">Квалифицированные
                            специалисты</h5>
                        <p>Сайт рыбатекст поможет вам и дизайнеру, версталь, вебмастеру сгенерировать несколько абзацев</p>
                    </Col>
                    <Col lg="3">
                        <img src="images/iconsTwo.png" alt=""/>
                        <h5 className="mt-3">Квалифицированные
                            специалисты</h5>
                        <p>Сайт рыбатекст поможет вам и дизайнеру, версталь, вебмастеру сгенерировать несколько абзацев</p>
                    </Col>
                    <Col lg="3">
                        <img src="images/iconsTwo.png" alt=""/>
                        <h5 className="mt-3">Квалифицированные
                            специалисты</h5>
                        <p>Сайт рыбатекст поможет вам и дизайнеру, версталь, вебмастеру сгенерировать несколько абзацев</p>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default IconsPart;