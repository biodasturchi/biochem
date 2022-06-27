import { useState } from 'react'
import { articles } from '../../data/articles'
import Article from './article'
import Pagination from './pagination'
import './articles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Articles = () => {
  const [query, setQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  // Search section
  const keys = ["title", "authors", "journal", "date"]
  const search = (data) => {
    return data.filter(
      (item) => keys.some(key => item[key].toLowerCase().includes(query))
    )
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="articles__container">
      <div className="search__box">
        <input
          type="text"
          placeholder='Search'
          className="search__input"
          onChange={e => setQuery(e.target.value)} />
        <button type='button' className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <Article data={search(currentPosts)} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={articles.length}
        paginate={paginate} />
    </div>
  )
}

export default Articles