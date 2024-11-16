import React from 'react'
import aboutimage from '../images/about.png'
const About = () => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>Learn More about Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptas earum perferendis ad cumque aliquid eum, adipisci nesciunt autem voluptatem distinctio alias tempora voluptatum fugiat saepe, iusto, eius eveniet architecto.</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About