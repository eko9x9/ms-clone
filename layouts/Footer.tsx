import React, { ReactElement } from 'react'

export default function Footer(): ReactElement {
    return (
        <footer className="main-footer">
            <div className="footer-inner">
                <div className="">
                    <i className="fas fa-globe fa-2x"></i>
                    English (United State)
                </div>

                <ul>
                    <li><a href="//#endregion">Sitemap</a></li>
                    <li><a href="">Contact Microsoft</a></li>
                    <li><a href="">Privacy & Cookies</a></li>
                    <li><a href="">Term of use</a></li>
                    <li><a href="">Trademarks</a></li>
                    <li><a href="">Safety and eco</a></li>
                    <li><a href="">&copy; Microsoft 2021</a></li>
                </ul>
            </div>
        </footer>
    )
}
