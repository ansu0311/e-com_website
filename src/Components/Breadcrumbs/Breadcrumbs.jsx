import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumbs'>
        home <img src={arrow_icon} alt="arrow icon" /> shop <img src={arrow_icon} alt="arrow icon" />  {product.category} <img src={arrow_icon} alt="arrow icon" /><div className='high'>{product.name}</div>
    </div>
  )
}

export default Breadcrumbs