import React from 'react';
import {Button, Card, Col, Container, Row} from "reactstrap";

const CardsPart = () => {
    return (
        <div className="cardsPart">
            <Container>
                <Row>
                    <Col lg="12" className="text-center mt-5 mb-4">
                        <h4>Популярные курсы</h4>
                    </Col>
                    <Col lg="4">
                        <Card className="border-0 position-relative mt-3">
                            <div className="position-absolute py-1 px-3 rounded marketing text-white">Маркетинг</div>
                            <img className="card-img" src="images/cardone.png" alt=""/>
                            <div className="p-3">
                            <h6>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта </h6>
                            <div className="d-flex justify-content-between align-items-center mt-3"><p className="mb-0">95 000 сум</p><Button>Выбрать</Button></div>
                            </div>
                            </Card>
                    </Col>
                    <Col lg="4">
                        <Card className="border-0 position-relative mt-3">
                            <div className="position-absolute py-1 px-3 rounded marketing text-white">Маркетинг</div>
                            <img className="card-img" src="images/card2.png" alt=""/>
                            <div className="p-3">
                                <h6>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта </h6>
                                <div className="d-flex justify-content-between align-items-center mt-3"><p className="mb-0">95 000 сум</p><Button>Выбрать</Button></div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card className="border-0 position-relative mt-3">
                            <div className="position-absolute py-1 px-3 rounded marketing text-white">Маркетинг</div>
                            <img className="card-img" src="images/card3.png" alt=""/>
                            <div className="p-3">
                                <h6>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта </h6>
                                <div className="d-flex justify-content-between align-items-center mt-3"><p className="mb-0">95 000 сум</p><Button>Выбрать</Button></div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card className="border-0 position-relative mt-3">
                            <div className="position-absolute py-1 px-3 rounded marketing text-white">Маркетинг</div>
                            <img className="card-img" src="images/card1.png" alt=""/>
                            <div className="p-3">
                                <h6>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта </h6>
                                <div className="d-flex justify-content-between align-items-center mt-3"><p className="mb-0">95 000 сум</p><Button>Выбрать</Button></div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card className="border-0 position-relative mt-3">
                            <div className="position-absolute py-1 px-3 rounded marketing text-white">Маркетинг</div>
                            <img className="card-img" src="images/card4.png" alt=""/>
                            <div className="p-3">
                                <h6>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта </h6>
                                <div className="d-flex justify-content-between align-items-center mt-3"><p className="mb-0">95 000 сум</p><Button>Выбрать</Button></div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card className="border-0 position-relative mt-3">
                            <div className="position-absolute py-1 px-3 rounded marketing text-white">Маркетинг</div>
                            <img className="card-img" src="images/card1.png" alt=""/>
                            <div className="p-3">
                                <h6>Маркетинг и все его тонкости. Профессия маркетолога с 0 до эксперта </h6>
                                <div className="d-flex justify-content-between align-items-center mt-3"><p className="mb-0">95 000 сум</p><Button>Выбрать</Button></div>
                            </div>
                        </Card>
                    </Col>
<Col lg="12" className="text-center mt-3">
    <Button>Смотреть все курсы</Button>
</Col>
                </Row>
            </Container>
        </div>
    );
};

export default CardsPart;