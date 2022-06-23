import React from 'react'
import { Navbar, Header, Footer, Banner, Hilights } from '../../components'
import './home.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header props="Your Lab Slogan" />
      <Banner />
      <Hilights />
      <Footer />
    </>
  )
}

export default Home