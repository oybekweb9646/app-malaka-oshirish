import React from 'react';
import Slider from "react-slick";
const Karousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="text-center mt-5 karousel container">
<h3>Наши профессора</h3>
            <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать <br/> несколько абзацев более менее осмысленного текста рыбы на русском языке.</p>

            <Slider {...settings}>

                <div className="text-center">
                    <img className="m-auto mb-4" src="images/Ellipse 18-1.png" alt=""/>
                    <h5>Александр Крюков</h5>
                    <p>Маркетинг специалист</p>
                </div>
                <div className="text-center">
                    <img className="m-auto mb-4" src="images/Ellipse 18-2.png" alt=""/>
                    <h5>Александр Крюков</h5>
                    <p>Маркетинг специалист</p>
                </div>
                <div className="text-center mb-4">
                    <img className="m-auto" src="images/Ellipse 18-3.png" alt=""/>
                    <h5>Александр Крюков</h5>
                    <p>Маркетинг специалист</p>
                </div>
                <div className="text-center">
                    <img className="m-auto mb-4" src="images/Ellipse 18-4.png" alt=""/>
                    <h5>Александр Крюков</h5>
                    <p>Маркетинг специалист</p>
                </div>
                <div className="text-center">
                    <img className="m-auto mb-4" src="images/Ellipse 18-1.png" alt=""/>
                    <h5>Александр Крюков</h5>
                    <p>Маркетинг специалист</p>
                </div>
                <div className="text-center">
                    <img className="m-auto mb-4" src="images/Ellipse 18-2.png" alt=""/>
                    <h5>Александр Крюков</h5>
                    <p>Маркетинг специалист</p>
                </div>
                <div className="text-center">
                    <img className="m-auto mb-4" src="images/Ellipse 18-3.png" alt=""/>
                    <h5>Александр Крюков</h5>
                    <p>Маркетинг специалист</p>
                </div>
                <div className="text-center">
                    <img className="m-auto mb-4" src="images/Ellipse 18-4.png" alt=""/>
                    <h5>Александр Крюков</h5>
                    <p>Маркетинг специалист</p>
                </div>

            </Slider>

        </div>
    );
};

export default Karousel;