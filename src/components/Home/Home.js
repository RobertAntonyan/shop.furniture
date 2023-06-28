import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Home.css'
import Collections from '../Collections/Collections'
import TopFurniture from '../TopFurniture/TopFurniture'
import Service from '../Services/Service'
import TrendingProoducts from '../TrendingProducts/TrendingProoducts'
import Footer from '../Footer/Footer'
import Customer from '../Customer/Customer'
import Logo from '../Logo/Logo'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/slices/login/loginSlice'


function Home(currentUser, setCurrentUser) {
const navigate = useNavigate()
const {pathname} = useLocation()

const user = useSelector(selectCurrentUser)

// console.log(user);
  const titles = [
    {
      id: '1',
      title: 'New Arrivals'
    },
    {
      id: '2',
      title: 'Hot Sale'
    },
    {
      id: '3',
      title: 'Furniture'
    },
    {
      id: '4',
      title: 'Amrature'
    },
    {
      id: '5',
      title: 'Table'
    },
    {
      id: '6',
      title: 'Chair'
    },
    {
      id: '7',
      title: 'Sofa'
    },
    {
      id: '8',
      title: 'Mirrors'
    },
    {
      id: '9',
      title: 'Stools'
    },
    {
      id: '10',
      title: 'Benches'
    },
  ]
 
//  


  return (
    <div className='Home'>
         <section>
        <div className='homeMenu'>

          {
            titles.map(el => (
              <Collections
                key={el.id}
                id={el.id}
                title={el.title}
              />
            ))
          }

        </div>

        <div className='homeTop'>
          <TopFurniture />
        </div>
      </section>
      <div className='serviceBlock'>
        <Service />
      </div>
          <TrendingProoducts />
          <Customer />
          <Footer />
      {/* <hr/>
      <button onClick={handleClick}>Click</button> */}
    </div>

  )
}

export default Home