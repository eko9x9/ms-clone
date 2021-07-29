import React, { ReactElement } from 'react';
import Image from "next/image";
import LogoImg from "../assets/img/logo.png";
import MenuBtn from '../components/MenuBtn';

export default function Navbar(): ReactElement {

    return (
        <React.Fragment>
            <MenuBtn>
                {(isShow: boolean, setIsShown: (setShow: boolean) => void) => (
                    <nav className='main-nav'>
                        <div className="logo">
                            <Image src={LogoImg} alt="logo" className="logo" />
                        </div>
                        <ul className={`main-menu ${isShow && "show"}`}>
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
                )}
            </MenuBtn>
        </React.Fragment>
    )
}
