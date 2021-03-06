import {memo} from 'react'
import './articles.css'

const Article = ({ data }) => {

  console.log('Render Article component');
  return (
    <div className="article__content">
      {
        data.map(({ id, title, authors, journal, date, image, link, keywords }) => {
          return (
            <div className='article__content_box' key={id}>
              <img src={image} alt="Article" className='article__content_img' width={120} height={120} />
              <div className="article__content_content" >
                <a href={link} target="_blank" className="article__content_title">
                  {title}
                </a>
                <div className="article__content_authors">
                  {authors}
                </div>
                <div className="article__content_j_d">
                  <span className="article__content_journal">{journal}</span>
                  ·
                  <span className="article__content_date">{date}</span>
                </div>
                <div className="article__content_keywords">
                  {keywords.map((val, idx) => (
                    <span key={idx}>{val} </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default memo(Article)