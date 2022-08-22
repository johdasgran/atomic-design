import React from 'react'
import './Tags.css'

function Tags(props) {
  return (
    <a href="#/" className='tag'>{props.text}</a>
  )
}

export default Tags