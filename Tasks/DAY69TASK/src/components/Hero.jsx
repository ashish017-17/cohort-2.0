import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-section'>


            <div className="top">
                <div className="tittle">
                    <h1>Unleash Your Inner Champion Today.</h1>
                    <h1>All In One Place.</h1>
                </div>
                <div className="paragraph">
                    <p>Join the ultimate tennis experience - where passion meets performance,</p>
                    <p>and every swing brings you closer to victory</p>
                </div>
                <div className="button">
                    <button className='hero-btn'>Start your own journey</button>
                </div>
            </div>
            
            <div className="bottom">
                <div className="left">
                    <div className="left-para">
                        <p>Train With real professionals,</p>
                        <p>Get the real results.</p>
                    </div>

                    <div className="left-box">
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                    </div>
                </div>
                <div className="right">

                    <h6>Instagram</h6>
                    <h6>Facebook</h6>
                    <h6>Tik Tok</h6>

                </div>
            </div>


    </div>
  )
}

export default Hero