import React from 'react';
import "./../App.css"

export default function Header() {
    const title = "All Star"
  return (
    <div>
        <p className='app-title'>
        {title}
        <img src="star.png" className='header-img'  />
        </p> 
    </div>
  )
}
