import React from 'react';
import {Button, Col, Container, Progress, Row} from "reactstrap";

const NavbarBottom = () => {
    return (
        <div className="navbarbottom">

<Container>
<Row>
    <Col lg='6' className="colOne">
<h2>Улучшайте свои знания и практикуйте навыки</h2>
        <p>лучши онлине курсы собранной и одном месте <br/> помогу вам сконцентроватсия на изучении матирала </p>
    <Button color="succes" className="btn-success">Начать квалификатсию</Button>
    </Col>
    <Col lg="6" className="colSecond">
        <img src="images/happy-young-man-using-laptop-computer 4.png" alt=""/>
        <div className="mountain py-2 px-4">
            <p className="mb-0">Статистика изучения</p>
            <h5> > 124 часа </h5>
            <div className="d-flex">
                <img src="images/imagemountain.png" alt=""/>
                <img src="images/imagemoun.png" alt=""/>
            </div>
        </div>
        <div className="news py-2 px-4">
<h5>Алишер Расулов</h5>
            <p className="mb-1">Ген.Директор "Web studio"</p>
           <h6 className="mb-1"> Прогресс Обучения</h6>
            <Progress striped value={65}/>
            <div className="d-flex justify-content-end"><h5 className="mb-0">65%</h5></div>
        </div>
    </Col>
</Row>
</Container>

        </div>
    );
};

export default NavbarBottom;