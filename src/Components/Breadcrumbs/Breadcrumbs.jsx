import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumbs'>
        HOME <img src={arrow_icon} alt="arrow icon" /> SHOP <img src={arrow_icon} alt="arrow icon" />  {product.category} <img src={arrow_icon} alt="arrow icon" />{product.name}
    </div>
  )
}

export default Breadcrumbs