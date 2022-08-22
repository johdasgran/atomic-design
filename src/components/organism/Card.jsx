import React from 'react'
import './Card.css'
import FooterCard from '../molecules/FooterCard'
import ImageCard from '../molecules/ImageCard'

function Card() {
  return (
    <>

        <div className='card'>
            <div className='card__container'>
                <ImageCard imagen="coffee"></ImageCard>
                <FooterCard></FooterCard>
            </div>
        </div>
    
    </>
  )
}

export default Card