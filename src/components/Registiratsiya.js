import React from 'react';
import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";

const Registiratsiya = () => {
    return (
        <div>
            <div className="login">
                <Container>
                    <Row className="vh-100 align-items-center">
                        <Col lg="6" className="offset-3 align-items-center">
                            <Card>
                                <CardBody>
                                    <h2 className="text-center mb-4">Pегистрироваться</h2>
                                    <AvForm>
                                        <AvField
                                            className="border-0 avform"
                                            name="Номер телефона"
                                            type="text"
                                            label="Номер телефона"
                                            required
                                        />
                                        <AvField
                                            className="avform border-0"
                                            name="Пароль"
                                            type="password"
                                            label="Пароль"
                                            required
                                        />
                                        <AvField
                                            className="avform border-0"
                                            name="Пароль"
                                            type="password"
                                            label="Повторить пароль"
                                            required
                                        />
                                        <AvField
                                            name="Запомнить меня"
                                            type="checkbox"
                                            label="Запомнить меня"
                                            required
                                        />

                                        <Button className="border-0"><h4>Зарегистрироваться</h4></Button>


                                    </AvForm>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Registiratsiya;