import React from 'react'

const Featurebox = (props) => {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=""/>
        </div>
        <div className='a-b-text'>
                <h2>{props.text}</h2>
                <p>Lorem ipsum dolor site amet amet consectetur adipisicing.</p>
        </div>
    </div>
  )
}

export default Featurebox