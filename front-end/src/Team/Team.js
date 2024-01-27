import React from 'react'
import pic1 from '../assets/pic1.jpeg'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import './Team.css'

const Team = () => {
  return (
    <div className='outer'>
      <div className='box'>
        <div className="person">
            <img src={pic1} alt='logo' className='headshot'/>
            <div className="desc">Aniket Gupta</div>
        </div>
        <div className="person">
            <img src={pic2} alt='logo' className='headshot'/>
            <div className="desc">Praneel Seth</div>
        </div>
        <div className="person">
            <img src={pic3} alt='logo' className='headshot'/>
            <div className="desc">Kavan Mehta</div>
        </div>
      </div>
    </div>
  )
}

export default Team
