import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Lets Keep the conversation going</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className='Email_holder'> 
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter