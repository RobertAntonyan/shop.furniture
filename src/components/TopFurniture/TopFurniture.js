import React from 'react'
import './TopFurniture.css'
import TopItem from '../TopItem/TopItem'
import Image from '../../Images/index'

function TopFurniture() {
    const dataFur = [
    {
      id: '1',
      description: 'Office Desk Chair',
      img: Image.chair2,
      price: 120,
    },
    {
      id: '2',
      description: 'Home Alisa Sofa',
      img: Image.chair3,
      price: 180,
    },
    {
      id: '3',
      description: 'Modern Chair',
      img: Image.chair4,
      price: 250,
    },
  ]
 
  return (
    <div className='top'>
      <div className='topText'>
        <p>TOP COLLECTIONS 2022</p>
        <h1>We Serve Your Dream Furniture</h1>
        <p className='mulish'>Get 50% off all products</p>
        <button className='topButton'>SHOP NOW</button>
      </div>

      <div className='topPictures'>
        <img className='chair1' src={Image.chair1} alt='chair1' />


      </div>
      <div className='topProd'>
      {
        dataFur.map(el => (
          <TopItem
            key={el.id}
            id={el.id}
            description={el.description}
            img={el.img}
            price={el.price}
          />
        ))
      }
      </div>

    </div>
  )
}

export default TopFurniture