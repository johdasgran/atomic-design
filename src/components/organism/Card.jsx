import './Card.css'
import FooterCard from '../molecules/FooterCard'
import ImageCard from '../molecules/ImageCard'

function Card(props) {

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





  return (
    <>

        <div className='card'>
            <div className='card__container'>
                <ImageCard imagen={props.type}></ImageCard>
                <FooterCard name={name} price={price} ></FooterCard>
            </div>
        </div>
    
    </>
  )
}

export default Card