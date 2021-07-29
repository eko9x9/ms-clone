import React, { ReactElement } from 'react';
import Image from "next/image";
import Card1Img from "../../assets/img/card1.png";
import Card2Img from "../../assets/img/card2.png";
import Card3Img from "../../assets/img/card3.png";
import Card4Img from "../../assets/img/card4.png";
import Card5Img from "../../assets/img/card5.png";


export default function Cards(): ReactElement {
    return (
        <section className="home-cards">
            <div className="">
                <div className="img">
                    <Image src={Card1Img} alt="card" />
                </div>
                <h3>New Surface Pro 7</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, praesentium.</p>

                <a href="#">Learn More <i className="fas fa-chevron-right"></i></a>
            </div>

            <div className="">
                <div className="img">
                    <Image src={Card2Img} alt="card"/>
                </div>
                <h3>Laptop Pro 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, praesentium.</p>

                <a href="#">Learn More <i className="fas fa-chevron-right"></i></a>
            </div>

            <div className="">
                <div className="img">
                    <Image src={Card3Img} alt="card"/>
                </div>
                <h3>Free Controller</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, praesentium.</p>

                <a href="#">Learn More <i className="fas fa-chevron-right"></i></a>
            </div>

            <div className="">
                <div className="img">
                    <Image src={Card4Img} alt="card"/>
                </div>
                <h3>The new Microsoft Edge</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, praesentium.</p>

                <a href="#">Learn More <i className="fas fa-chevron-right"></i></a>
            </div>
        </section>
    )
}
