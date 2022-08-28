import React, { useState } from 'react'
import './Tags.css'

function Tags(props) {


  const [stateCoffee, setStateCoffee] = useState(false)

  // console.log(stateCoffee)

  const updatePreferCoffee = () => {
    setStateCoffee(true)
    console.log("Estado ", {stateCoffee})
  }



  return (
    <a href="#/" onClick={updatePreferCoffee} className='tag'>{props.text}</a>
  )
}

export default Tags