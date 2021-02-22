import React from 'react';
import {Button, Card, Col, Row} from "reactstrap";

const ManBluePart = () => {
    return (
        <div className="mt-5 manblue">

            <div className="container-fluid">
                <Row>
                    <Col lg="6" className="one">
                        <h3>Присоединяйтесь к вебинарам по определенному курсу</h3>
                        <p>Участвуйте в вебинарах, делитесь опытом и задавайте вопросы. Все это возможно в отдельных группах, которые доступны при прохождении каждого курса!</p>
                    <div className="d-flex align-items-center">
                        <img className=" icons" src="images/Ellipse 18-2.png" width="40" alt=""/>
                        <img className=" aaa icons" src="images/Ellipse 18-3.png" width="40" alt=""/>
                        <img className="ml-4 icons" src="images/Ellipse 18-1.png" width="40" alt=""/>
                        <img className="ml-5 icons" src="images/Ellipse 18-4.png" width="40" alt=""/>
                        <h6>человек уже стали участниками групп <br/> по своим направлениям</h6>
                    </div>
                        <Button>Присоединиться</Button>
                    </Col>
                    <Col lg="6" className="pr-0">
                        <Card className="border-0 rounded-0">
                            <img className="card-img" src="images/manblue.png" alt=""/>
                        </Card>

                    </Col>
                </Row>
            </div>



        </div>
    );
};

export default ManBluePart;