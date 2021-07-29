import React, { ReactElement } from 'react';
import Image from "next/image";
import LogoImg from "../assets/img/logo.png";

export default function Navbar(): ReactElement {
    return (
        <nav className="main-nav">
            <Image src={LogoImg} alt="logo" className="logo" width="200" />
            <ul className="main-menu">
                <li><a href="#">Office</a></li>
                <li><a href="#">Windows</a></li>
                <li><a href="#">Surface</a></li>
                <li><a href="#">Xbox</a></li>
                <li><a href="#">Deals</a></li>
                <li><a href="#">Support</a></li>
            </ul>

            <ul className="right-menu">
                <li>
                    <a href="//#endregion">
                        <i className="fas fa-search"></i>
                    </a>
                </li>
                <li>
                    <a href="//#endregion">
                        <i className="fas fa-shopping-cart"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
