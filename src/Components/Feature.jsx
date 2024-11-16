import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'
const Feature = () => {
  return (
    <div id='features'>
       <h1>FEATURES</h1>
       <div className='a-container'>
        <Featurebox 
        image={fimage1}
        text="WightLifting"
        />
        <Featurebox 
        image={fimage2}
        text="Specific Muscle"
        />
        <Featurebox 
        image={fimage3}
        text="Flex Your Muscle"
        />
        <Featurebox 
        image={fimage4}
        text="cardio Exerise"
        />
       </div>
    </div>
  )
}

export default Feature