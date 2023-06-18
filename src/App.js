import './App.css';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Blog  from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import HomeWrapper from './pages/HomeWrapper';
import ErrorPage from './pages/ErrorPage';
import './App.css'
import { useState } from 'react';
import Images from './Images';
import UniqPage from './components/UniqPage/UniqPage';
import Cart from './components/Cart/Cart';
import Registr from './components/Registr/Registr';
import LogIn from './components/LogIn/LogIn';


function App() {

  

  const [blogData, setBlogData] = useState([
    {
      id: '1',
      date: '25.06.2021',
      title:'HEAVE A LOOK AT OUR NEW PROJECTS!',
      description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
      img: Images.blog1,
    },
    {
      id: '2',
      date: '25.06.2021',
      title:'HEAVE A LOOK AT OUR NEW PROJECTS!',
      description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
      img: Images.blog2,
    },
    {
      id: '3',
      date: '25.06.2021',
      title:'HEAVE A LOOK AT OUR NEW PROJECTS!',
      description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
      img: Images.blog3,
    },
    {
      id: '4',
      date: '25.06.2021',
      title:'HEAVE A LOOK AT OUR NEW PROJECTS!',
      description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
      img: Images.blog4,
    },
    {
      id: '5',
      date: '25.06.2021',
      title:'HEAVE A LOOK AT OUR NEW PROJECTS!',
      description: 'First things first, find out what you like. What make you, you? More often than not we find that people have been stuck in places where others have called the shots.',
      img: Images.blog5,
    },
  ])
  const [postItem, setPostItem] = useState([
    {
      id:'1',
      month: 'May',
      day: Math.round(Math.random() * 31).toString(),
      post: 'Lorem Ipsum is simply dummy text.',
    },
    {
      id:'2',
      month: 'Jun',
      day: Math.round(Math.random() * 31).toString(),
      post: 'Lorem Ipsum is simply dummy text.',
    },
    {
      id:'3',
      month: 'Sept',
      day: Math.round(Math.random() * 31).toString(),
      post: 'Lorem Ipsum is simply dummy text.',
    },
    {
      id:'4',
      month: 'Dec',
      day: Math.round(Math.random() * 31).toString(),
      post: 'Lorem Ipsum is simply dummy text.',
    },
    {
      id:'5',
      month: 'Apr',
      day: Math.round(Math.random() * 31).toString(),
      post: 'Lorem Ipsum is simply dummy text.',
    },
  ])

  // const [cart, setCart] = useState([])
  // const [formInfo, setFormInfo] = useState(
  //   {
  //     firstName: '',
  //     lastName: '',
  //     password: ''
  //   },
   
  // )
  const [currentUser, setCurrentUser] = useState([])
  return (
    <div className="App">
      <Header />
      <Logo />
     <Routes>
      <Route path='/' element={<HomeWrapper />}>
      <Route index element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      <Route path='blog' element={<Blog  blogData={blogData}  setBlogData={setBlogData} postItem={postItem} setPostItem={setPostItem}/>} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
         <Route path='shop'>
      <Route index element={<Shop />} />
      <Route path=':id' element={<UniqPage />} />
       </Route>
      </Route>
      <Route path='/cart' element={<Cart  />} />
      {/* <Route path='/login' element={<LogIn {...{currentUser, setCurrentUser}}  />} /> */}
      <Route path='/registr' element={<Registr  {...{currentUser, setCurrentUser}}/>} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>

         
    </div>
  );
}

export default App;
