import React from 'react'
import './Home.css'
import home from '../assets/home.png'
import FileUpload from './FileUpload.js'

const Home = () => {
  return (
    <div className='frame'>
        <div className="table">
            <img src={home} alt='logo' className='homeImg'/>
            <div className="demoColumn">
                <div className="demoText">The AI budgeting app for all budgeting needs.</div>
                <FileUpload/>
            </div>
        </div>
    </div>
  )
}

export default Home
