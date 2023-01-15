import React from 'react';
import Link from 'next/link';
import {urlFor} from "../lib/client"
const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className='car-parts'> {heroBanner.smallText} </p> 
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largetext1}</h1>
        <img src={urlFor(heroBanner.image)} alt='headphones' className="hero-banner-image"/>
        <div>

          <div className='desc'>
            
            <h2>{heroBanner.desc}</h2>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HeroBanner
