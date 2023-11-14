import React, { useContext } from 'react'
import './NewCollections.css'
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";


const NewCollections = () => {

  const { listmaking } = useContext(ShopContext);

  const list_timeless = listmaking("Timeless");

  return (
    <div className="containe">
    <div className='Timeless_collection'>
      <div className="Timeless_left">
      <Link to={`/product/${list_timeless[0].id}`} >
        <img src={list_timeless[0].image} alt="" />
        </Link>
      </div>
      <div className="Timeless_right">
        <div className="text_out">
          <div className='text_out_heading'>
            <div>Timeless Collection</div>
            <div>Classics That Never Fade</div>
          </div>
          <div className='text_out_description'>
            <div>Introducing <span>HueHarmony's</span> Timeless Collection:
               Elevate Your Wardrobe with Classics That Never Fade!</div>
            <div>In a world of ever-changing trends, there are some 
              clothing pieces that stand the test of time. <span>HueHarmony </span> 
              proudly presents our Timeless Collection, a carefully 
              curated selection of essential garments that will 
              forever hold a special place in your wardrobe.</div>
          </div>
        </div>
        <div className="image_out">
      <Link to={`/product/${list_timeless[1].id}`} >
          <img src={list_timeless[1].image} alt="" />
          </Link>
      <Link to={`/product/${list_timeless[2].id}`} >
          <img src={list_timeless[2].image} alt="" />
          </Link>
      <Link to={`/product/${list_timeless[3].id}`} >
          <img src={list_timeless[3].image} alt="" />
          </Link>

        </div>
      </div>
    </div>
    </div>
  )
}

export default NewCollections