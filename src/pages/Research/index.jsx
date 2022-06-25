import React from 'react'
import { Navbar, Footer, Header, Articles } from '../../components'

const Research = () => {
  const researchTitle = "Research"
  return (
    <div>
      <Navbar />
      <Header props="research" />
      <Articles />
      <Footer />
    </div>
  )
}

export default Research