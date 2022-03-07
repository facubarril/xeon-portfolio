import React from 'react'
import './portfolio.min.css'
import IMG1 from '../../assets/img/portfolio/img1.jpg'
import IMG2 from '../../assets/img/portfolio/img2.jpg'
import IMG3 from '../../assets/img/portfolio/img3.jpg'
import IMG4 from '../../assets/img/portfolio/img4.jpg'
import IMG5 from '../../assets/img/portfolio/img5.jpg'
import IMG6 from '../../assets/img/portfolio/img6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com/facubarril',
        demo: 'https://webcreatio.net'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Charts Templates & Infographics in Figma',
        github: 'https://github.com/facubarril',
        demo: 'https://webcreatio.net'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Figma Dashboard UI Kit for Data Design Web Apps',
        github: 'https://github.com/facubarril',
        demo: 'https://webcreatio.net'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Maintaining Tasks and Tracking Progress',
        github: 'https://github.com/facubarril',
        demo: 'https://webcreatio.net'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com/facubarril',
        demo: 'https://webcreatio.net'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Charts Templates & Infographics in Figma',
        github: 'https://github.com/facubarril',
        demo: 'https://webcreatio.net'
    }
]

export const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {
                data.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-bg" style={{backgroundImage: `url(${image})`}}></div>
                            <div className="portfolio__item-image">
                                <img src={image} alt="Portfolio" />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Demo</a>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Portfolio