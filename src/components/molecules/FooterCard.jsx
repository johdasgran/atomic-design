import React from 'react'
import './FooterCard.css'
import Buttons from '../atoms/Buttons/Buttons'
import Tags from '../atoms/Tags/Tags'
import Text from '../atoms/Text/Text'



function FooterCard() {
  return (
    <>
    <div className='footer__card'>

      <div className='footer__card-left'>
        <Text text="Vanilla Latte" style="title-card"></Text>
        <div className='footer__card-tags'>
          <Tags text="Hot"></Tags>
          <Tags text="Cold"></Tags>
        </div>

      </div>

      <div className='footer__card-right'>
        <Text text="21 K" style="price-card"></Text>
        <Buttons></Buttons>
      </div>

    </div>
    </>
  )
}

export default FooterCard