import React from 'react'
import './FooterCard.css'
import Buttons from '../atoms/Buttons/Buttons'
import Tags from '../atoms/Tags/Tags'
import Text from '../atoms/Text/Text'



function FooterCard(props) {


  return (
    <>
    <div className='footer__card'>

      <div className='footer__card-left'>
        <Text text={props.name} style="title-card"></Text>
        <div className='footer__card-tags'>
          <Tags text="Hot"></Tags>
          <Tags text="Cold"></Tags>
        </div>

      </div>

      <div className='footer__card-right'>
        <Text text={props.price} style="price-card"></Text>
        <div className='footer__card-cart'>
          <Buttons></Buttons>
        </div>
      </div>

    </div>
    </>
  )
}

export default FooterCard