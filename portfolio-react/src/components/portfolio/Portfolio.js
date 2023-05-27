import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Weather App" />
          </div>
          <h3>Weather App</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/flexzy2011/weather-app-react.git' className='btn btn-secondary' target='_blank'>Github</a>
            <a href='https://polite-maamoul-7b5c72.netlify.app/' className='btn btn-secondary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="Todo App" />
          </div>
          <h3>Todo App</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/flexzy2011/todo-redux-checkpoint.git' className='btn btn-secondary' target='_blank'>Github</a>
            <a href='https://https://spectacular-caramel-c9392e.netlify.app/' className='btn btn-secondary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="Movie App" />
          </div>
          <h3>Movie App</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/flexzy2011/movie-app-router.git' className='btn btn-secondary' target='_blank'>Github</a>
            <a href='https://https://gregarious-hamster-66ed85.netlify.app/' className='btn btn-secondary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;
