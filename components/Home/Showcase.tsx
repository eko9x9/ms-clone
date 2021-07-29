import React, { ReactElement } from 'react'

export default function Showcase(): ReactElement {
    return (
        <header className="showcase">
            <h2>Surface Deals</h2>
            <p>
                Select Surfaces are on sale now - save while supplies last
            </p>
            <a href="#" className="btn">
                Shop Now <i className="fas fa-chevron-right"></i>
            </a>
        </header>
    )
}
