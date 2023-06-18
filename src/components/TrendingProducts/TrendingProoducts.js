import React from 'react'
import './TrendingProduct.css'
import Images from '../../Images/index'
import TrendingItem from '../TrendingItem/TrendingItem'

function TrendingProoducts() {
  const dataTrend = [
    {
      id: '1',
      title: 'CHAIR',
      description: 'Minimal LCD chair',
      newPrice: 180,
      oldPrice: 250,
      img: Images.chair5,
    },
    {
      id: '2',
      title: 'CHAIR',
      description: 'Minimal Iconic chair',
      newPrice: 180,
      oldPrice: 250,
      img: Images.chair6,
    },
    {
      id: '3',
      title: 'CHAIR',
      description: 'Dining chair',
      newPrice: 180,
      oldPrice: 250,
      img: Images.chair7,
    },
    {
      id: '4',
      title: 'CHAIR',
      description: 'Buskbo armchair',
      newPrice: 180,
      oldPrice: 250,
      img: Images.chair8,
    },
    {
      id: '5',
      title: 'CHAIR',
      description: 'Modern chair',
      newPrice: 180,
      oldPrice: 250,
      img: Images.chair9,
    },
    {
      id: '6',
      title: 'CHAIR',
      description: 'Plastic dining chair',
      newPrice: 180,
      oldPrice: 250,
      img: Images.chair10,
    },
    {
      id: '7',
      title: 'CHAIR',
      description: 'Minimal Wood chair',
      newPrice: 180,
      oldPrice: 250,
      img: Images.chair11,
    },
    {
      id: '8',
      title: 'CHAIR',
      description: 'Elegant chair',
      newPrice: 180,
      oldPrice: 250,
      img: Images.chair1,
    },
  ]


  return (
    <div className='trending'>

      <div className='trendingTitle'>
        <h2>TRENDING</h2>
        <div className='trendUl'>
          <ul>
            <li>
              <a href='#'><span className='topprod'>Top Products</span></a>
              <a href='#'><span>New Arrivals</span></a>
              <a href='#'><span>Best Sellers</span></a>
            </li>
          </ul>
        </div>
      </div>

      <div className='trendProduct'>
        {
          dataTrend.map(el => (
            <TrendingItem 
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
            newPrice={el.newPrice}
            oldPrice={el.oldPrice}
            img={el.img}
            />
          ))
        }


      </div>


    </div>
  )
}

export default TrendingProoducts