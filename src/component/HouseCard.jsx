import React from 'react'
import './styles/housecard.css'
// import img from './../assets/duplex.png'
const HouseCard = ({title, img, alt,price}) => {
  return (
    <div className='houseCard'>
        <img src={img} alt={alt}/>
        <div className='houseCardHeader'>
            <p className='houseCardHeaderTitle'>{title}</p>
            <p className='houseCardHeaderAmount'>{price}</p>
        </div>
        <p className='houseDetails'>
        Stunning home with modern design and abundant natural light, nestled in a peaceful neighbor-hood with easy access to amenities and schools.
        </p>
    </div>
  )
}

export default HouseCard