import React from 'react'
import './Buttons.css'
import cart from '../../../assets/icons/cart.svg'

function Buttons() {
  return (
    <a href='#/' className='btn btn-round'>
        <img src={cart} alt='icon cart'></img>
    </a>
  )
}

export default Buttons