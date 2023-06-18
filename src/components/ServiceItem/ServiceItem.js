import React from 'react'
import './ServiceItem.css'
function ServiceItem({image,title, description}) {
 
  return (
    <div className='serviceitem'>
        <div className='serviceImageblock'>
            <img className='serviceimage' width={50} height={50} src={image} alt={title}/>
        </div>
        <div className='servicetext'>
      <p className='serviceP'>{title}</p>
      <p className='serviceP'>{description}</p>
       </div>
    </div>
  )
}

export default ServiceItem