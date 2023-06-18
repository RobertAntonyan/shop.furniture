
import { NavLink, Outlet } from 'react-router-dom'
import './HomeWrapper.css'

function HomeWrapper() {

  return (
   <div className='wrapper'>
      <div className='navBar'>
        <div className='collection'>
          <svg className='menuLine' width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18H10" stroke="#000000" strokeWidth={2} strokeLinecap="round" />
            <path d="M4 12L16 12" stroke="#000000" strokeWidth={2} strokeLinecap="round" />
            <path d="M4 6L20 6" stroke="#000000" strokeWidth={2} strokeLinecap="round" />
          </svg>
          <p>ALL COLLECTIONS</p>

        </div>


        <nav>
          <ul>
            <li><NavLink className={({ isActive }) => isActive ? 'selected_nav' : ''} to='/'>HOME</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'selected_nav' : ''} to='/shop'>SHOP</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'selected_nav' : ''} to='/blog'>BLOG</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'selected_nav' : ''} to='/about'>ABOUT</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'selected_nav' : ''} to='/contact'>CONTACT US</NavLink></li>
          </ul>
         </nav>

      </div>

    <Outlet />

    </div>

  )
}

export default HomeWrapper