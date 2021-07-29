import React, { ReactElement } from 'react';
import Image from "next/image";
import FbImg from "../../assets/img/social-fb.png";
import TwitterImg from "../../assets/img/social-twitter.png";
import LinkedinImg from "../../assets/img/social-linkedin.png";

export default function Follow(): ReactElement {
    return (
        <section className="follow">
            <p>Follow Microsoft </p>
            <a href="#">
                <Image src={FbImg} alt="Facebook" />
            </a>
            <a href="#">
                <Image src={TwitterImg} alt="Twitter" />
            </a>
            <a href="#">
                <Image src={LinkedinImg} alt="Linkedin" />
            </a>
        </section>
    )
}
