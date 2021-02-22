import React from 'react';
import {Button, Card, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row} from "reactstrap";

const Center = () => {
    return (
        <div className="center">
            <Container>
                <Row>
                    <Col lg="12">
                        <Card className="border-0 text-center pb-5 mb-3">
                            <h3 className="font-weight-bold">Проверьте свой сертификат на действительность</h3>
                            <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать <br/> несколько абзацев более менее осмысленного текста рыбы на русском языке.</p>
                        <InputGroup className="border-0 mt-4">
                            <Input placeholder="Введите номер вашего сертификата" className="border-0"/>
                            <InputGroupAddon addonType="append" className="border-0">
                                <Button className="rounded-left px-5">Проверить сертификат</Button>
                            </InputGroupAddon>
                        </InputGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Center;