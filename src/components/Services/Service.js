import React from 'react'
import Images from '../../Images/index'
import './Service.css'
import ServiceItem from '../ServiceItem/ServiceItem'

function Service() {
    const dataService = [
        {
            id: '1',
            title: 'FREE SHIPPING',
            description: 'Orders over $100',
            img: Images.freeshipping,
        },
        {
            id: '2',
            title: 'Smart Gift Card',
            description: 'Buy $1000 to get card',
            img:  Images.giftcard,
        },
        {
            id: '3',
            title: 'Quick Payment',
            description: '100% secure payment',
            img: Images.payment,
        },
        {
            id: '4',
            title: '24/7 Support',
            description: 'Quick support',
            img:  Images.headphone,
        },
    ]


  return (
    <div className='service'>
       
      
       {
            dataService.map(el => (
                <ServiceItem 
                image={el.img}
                key={el.id}
                title={el.title}
                description={el.description}
                
                             
                />
            ))
       }



    </div>
  )
}

export default Service

