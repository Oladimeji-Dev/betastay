import React from 'react'
import './styles/testimonycard.css'
import profileImg from './../assets/image-test.png'
import { ReactComponent as Stars } from './../assets/five-star.svg'
const TestimonyCard = () => {
  return (
    <div className='container testimonyCard'>
      <img src={profileImg} alt="profile-image" />

      <div className='testimonyCardContext'>
        <p className='testCardName'>Wade Warren</p>
        <Stars />
        <p className="testCardDetails">
        The detailed descriptions and photos helped me make an informed decision. The booking process was smooth, and the customer service team was quick to respond to my queries. Highly recommended!"
        </p>
      </div>
    </div>
  )
}

export default TestimonyCard