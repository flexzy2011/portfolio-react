import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Todo-list" />
          </div>
          <h3>React Todo-list</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/flexzy2011/todo-react.git' className='btn btn-secondary' target='_blank'>Github</a>
            <a href='https://gorgeous-muffin-9ccfdb.netlify.app/' className='btn btn-secondary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="Password Generator" />
          </div>
          <h3>Password Generator</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/flexzy2011/password-generator-react.git' className='btn btn-secondary' target='_blank'>Github</a>
            <a href='https://eloquent-hamster-ac0d44.netlify.app/' className='btn btn-secondary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="Tic Tac Toe" />
          </div>
          <h3>Tic Tac Toe Game</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/flexzy2011/Tic-Tac-Toe-React.git' className='btn btn-secondary' target='_blank'>Github</a>
            <a href='https://symphonious-sfogliatella-84f47f.netlify.app/' className='btn btn-secondary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
