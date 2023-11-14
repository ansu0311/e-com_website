import React from 'react'
import './Offers.css'
import Girlgang2 from "../Assets2/Girlgang2.png"

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <div className='heading'>
              <div>Exclusive</div>
              <div>Offers For</div>
              <div>You</div>
              </div>
            <p><button>Check Now</button></p>
        </div>
        <div className="offers-right">
          <img src={Girlgang2} alt="" />
        </div>
    </div>
  )
}

export default Offers