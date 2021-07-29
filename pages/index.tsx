import React, { ReactElement } from 'react'
import Carbon from '../components/Home/Carbon'
import Cards from '../components/Home/Cards'
import Follow from '../components/Home/Follow'
import Links from '../components/Home/Links'
import Showcase from '../components/Home/Showcase'
import Xbox from '../components/Home/Xbox'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

export default function index(): ReactElement {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar />
        <Showcase />
        <Cards />
        <Xbox />
        <Cards />
        <Carbon />
        <Follow />
      </div>

      <Links />
      <Footer />
    </React.Fragment>
  )
}
