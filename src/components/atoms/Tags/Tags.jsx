import React, { useState } from 'react'
import './Tags.css'

function Tags(props) {


  const [stateCoffee, setStateCoffee] = useState(false)

  let activeTag = "tag"
  stateCoffee ? activeTag += " tag__active" : activeTag = "tag"

  const updatePreferCoffee = () => {
    stateCoffee ? setStateCoffee(false) : setStateCoffee(true)   
    console.log("Estado ", {stateCoffee})
  }

  
  return (
    <a href="#/" onClick={updatePreferCoffee} className={activeTag}>{props.text}</a>
  )
}

export default Tags