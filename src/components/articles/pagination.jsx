import {memo} from 'react'
import './articles.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  console.log(`Render Pagination component: ${typeof postsPerPage, typeof totalPosts, typeof paginate}`);
  return (
    <nav className='pagination__nav'>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page__item">
            <span
              onClick={() => paginate(number)}
              className="page__link">
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default memo(Pagination)