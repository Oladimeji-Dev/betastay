import React from 'react'
import './styles/filterproperty.css'
import { ReactComponent as ArrowDown } from './../assets/arrow-down-2.svg'
const FilterProperty = () => {
  return (
    <section className='filter'>
        <div className="container">
            <div className='filterCard'>
                <p>Property Type</p>
                <div className='filterCardSelect'>
                    <p>For Sale</p>
                    <ArrowDown />
                </div>
            </div>
            <div className='filterCard'>
                <p>Rooms</p>
                <div className='filterCardSelect'>
                    <p>3</p>
                    <ArrowDown />
                </div>
            </div>
            <div className='filterCard'>
                <p>Budget</p>
                <div className='filterCardSelect'>
                    <p>₦10m -20m</p>
                    <ArrowDown />
                </div>
            </div>
            <button className='btn btn-filter'>
                Filter
            </button>
        </div>
    </section>
  )
}

export default FilterProperty