import { articles } from '../../data/articles'
import './articles.css'

const Articles = () => {
  return (
    <div className="articles__container">
      <div className="search__box">
        <input type="text" placeholder='Search' className="search__input" />
        <button type='button' className="btn">
          <i class="fas fa-search" />
        </button>
      </div>
      {
        articles.map(({ id, title, image, link }) => {
          return (
            <div className='article__content_box' key={id}>
              <img src={image.src} alt="bla-bla" />
              <div className="article__content_content">
                <a href={link} target="_blank" className="article__content_link">
                  {title}
                </a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Articles