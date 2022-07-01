import React, { useState, useEffect } from 'react'
import { Navbar, Footer, Header } from '../../components'

const Blog = () => {

  const [articlesData, setArticlesData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://biochem-data.herokuapp.com/articles")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setArticlesData(data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <Header props="blog" />
      <div>
        <h1>Blog</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {articlesData.map(article => (
              <div key={article.id}>
                <h3>{article.title}</h3>
                <h3>{article.authors}</h3>
              </div>
            ))}
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Blog