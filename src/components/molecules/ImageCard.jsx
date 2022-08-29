import React from 'react'
import './ImageCard.css'
import coffee from '../../assets/images/card-images/vanilla-latte.png'
import espresso from '../../assets/images/card-images/espresso.png'
import hanzelnut_latte from '../../assets/images/card-images/hazelnut latte.png'


function ImageCard(props) {

    let imagen = "";

    if(props.imagen === "coffee") {
        imagen = coffee;
    } else if (props.imagen === "espresso") {
        imagen = espresso;
    } else if (props.imagen === "hanzelnut_latte") {
        imagen = hanzelnut_latte;
    }



  return (
    <div className='container-imagen'>
        <img  className='imagen' src={imagen} alt="Coffee" />
    </div>
  )
}

export default ImageCard