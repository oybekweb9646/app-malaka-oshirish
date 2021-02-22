import React from 'react';
import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation'
import {connect} from "react-redux";
import {loginUser} from "../redux/actions/authAction";
const Login = () => {


    const login = (event, values) =>{
        this.props.loginUser(values);
    }

    return (
        <div className="login">
<Container>
    <Row className="vh-100 align-items-center">
        <Col lg="6" className="offset-3 align-items-center">
<Card>
<CardBody>
    <h2 className="text-center mb-4">Вход</h2>
<AvForm onValidSubmit={login}>
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
        name="Запомнить меня"
        type="checkbox"
        label="Запомнить меня"
        required
    />

    <Button type='submit' className="border-0"><h4>Войти</h4></Button>


</AvForm>
</CardBody>
</Card>
        </Col>
    </Row>
</Container>
        </div>
    );
};



export default connect(null, {loginUser} )(Login);