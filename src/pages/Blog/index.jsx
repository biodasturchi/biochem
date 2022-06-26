import React, { useState, useEffect } from 'react'
import { Navbar, Footer, Header } from '../../components'

const Blog = () => {

  return (
    <div>
      <Navbar />
      <Header props="blog" />
      <div>
        Blog
      </div>
      <Footer />
    </div>
  )
}

export default Blog