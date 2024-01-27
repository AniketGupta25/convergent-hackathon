import React from 'react'
import './Home.css'
import home from '../assets/home.png'

const Home = () => {
  return (
    <div className='frame'>
        <div className="table">
            <img src={home} alt='logo' className='homeImg'/>
            <div className="demoColumn">
                <div className="demoText">The AI budgeting app for all budgeting needs.</div>
                <div className="demoItem">
                    <form>
                        <input type="file" className='fileInput'/>
                        <button type="submit" className='submit'>Upload</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
