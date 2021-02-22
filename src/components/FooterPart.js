import React from 'react';
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";

const FooterPart = () => {
    return (
        <div className="mt-5 footer pt-5">
<Container>
    <Row>
        <Col md="6" lg="3">
            <img src="images/brand.png" alt=""/>
        </Col>
        <Col md="6" lg="3">
            <Nav className="d-flex flex-column">
                <NavItem>
                    <NavLink href="#" className="pt-0"><h4 className="mb-0">Курсы</h4></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><p className="mb-0">Категория</p></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><p className="mb-0">Третья Категория</p></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><p className="mb-0">Вторая Категория</p></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><p className="mb-0">Четвертая Категория</p></NavLink>
                </NavItem>
            </Nav>
        </Col>
        <Col md="6" lg="3">
            <Nav className="d-flex flex-column">
                <NavItem>
                    <NavLink href="#" className="pt-0"><h4 className="mb-0">Мой профиль</h4></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><p className="mb-0">Аккаунт</p></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><p className="mb-0">Мои курсы</p></NavLink>
                </NavItem>
                <NavItem><NavLink href="#"><p className="mb-0">Избранное</p></NavLink></NavItem>
                <NavItem><NavLink href="#"><p className="mb-0">Помощь</p></NavLink></NavItem>
            </Nav>
        </Col>
        <Col md="6" lg="3">
            <Nav className="d-flex flex-column">
                <NavItem>
                    <NavLink href="#" className="pt-0"><h4 className="mb-0">CЛУЖБА ПОДДЕРЖКИ</h4></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><p className="mb-0">Политика конфиденциальности</p></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><p className="mb-0">Помощь</p></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><p className="mb-0">FAQ</p></NavLink>
                </NavItem>
            </Nav>
        </Col>
    </Row>
</Container>

            <div className="border-top mt-5 pb-3"></div>
            <h6 className="text-center pb-4">© 2020 Copyright. Все права защищены</h6>
        </div>
    );
};

export default FooterPart;