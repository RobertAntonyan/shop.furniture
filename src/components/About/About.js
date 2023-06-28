import './About.css'
import Images from '../../Images/index'
import Footer from '../Footer/Footer'


function About() {
  return (
    <div className='about'>
      <div className='aboutMe'>
        <div className='story'>
          <h1>OUR STORY</h1>
          <h3>A bit of history</h3>
        </div>
        <img className='aboutPic' src={Images.blog5} alt='img' />
      </div>
      <div className='meet'>
        <div className='meetText'>
          <h2>MEET OUR TEAM</h2>
          <p style={{ color: 'black' }}>Our architects and designers constantly and carefully monitor the environment, they accept and develop changes, research fashion and architectural, as well as sociological, changes and transform them into unique design.</p>
        </div>

        <div className='team'>
            <div className='teamImg'>
                  <img src={Images.user3} alt='pic'/>
            </div>
            <div className='teamImg'>
            <img src={Images.user2} alt='pic'/>
            </div>
            <div className='teamImg'>
            <img src={Images.user1} alt='pic'/>
            </div>
            <div className='teamImg'>
            <img src={Images.user2} alt='pic'/>
            </div>
         </div>
        <button id='contact'>Contact us</button> 
     
      <div className='workSection'>
        <div className='workImg'>
      <img src={Images.meeting} id='workPic' alt='meet'/>
        </div>
        <div className='workTop'>
          <div className='workText'>
            <h2>WE LOVE OUR WORK</h2>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </div>
        </div>
      </div>
      </div>
    <div className='interiors'>
      <div className='interiorTitle'>
          <h2>DESIGN OF INTERIORS</h2>
          <h4>Our services team produces interior design solutions</h4>
      </div>
      <div className='interiorBlocks'>
        <div className='interiorBlock1'>
          <img src={Images.blog5} className='interiorBigImg' alt='fff'/>
          <div className='miniBlock1'>
            <button>Interior design</button>
          </div>
        </div>
        <div className='interiorBlock2'>
          <img src={Images.blog2} className='interiorImg' alt='ggg'/>
          <div className='miniBlock2'>
            <button>3D Modeling</button>
          </div>
        </div>
        <div className='interiorBlock2'>
        <img src={Images.blog3} className='interiorImg' alt='ggg'/>
        <div className='miniBlock2'>
            <button>3D Modeling</button>
          </div>
        </div>
        <div className='interiorBlock2'>
        <img src={Images.blog4} className='interiorImg' alt='ggg'/>
        <div className='miniBlock2'>
            <button>3D Modeling</button>
          </div>
        </div>
        <div className='interiorBlock2'>
        <img src={Images.blog5} className='interiorImg' alt='ggg'/>
        <div className='miniBlock2'>
            <button>3D Modeling</button>
          </div>
        </div>
      </div>

    </div>


<Footer />



    </div>
  )
}

export default About