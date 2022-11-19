import './Card.css'
import FooterCard from '../molecules/FooterCard'
import ImageCard from '../molecules/ImageCard'
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';


function Card(props) {


  const one = useContext(authContext)




  let name = "";
  let price = "";

  if (props.name === "coffee") {
    name = "Vanilla Latte";
    price = "21 K";
  } else if (props.name === "espresso") {
    name = "Espresso";
    price = "12 K";
  } else if (props.name === "hanzelnut_latte") {
    name = "Hazelnut Latte";
    price = "23 K";
  }


  // console.log(props)


  return (
    <>
      <div className='card'>
          <div className='card__container'>
              <ImageCard imagen={props.type}></ImageCard>
              {console.log(one)}
              {props.children}
              <FooterCard name={name} price={price} ></FooterCard>
          </div>
      </div>
      
    </>
  )
}

export default Card