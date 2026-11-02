import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='main-services'>

        <div className="service-one">
            <div className="service-icon">
                <h4>Services</h4>
            </div>
            <div className="service-content">
                <p>Explore our full range of coaching</p>
                <p>training, and tennis experiences. From</p>
                <p>first serve to match point - we've</p>
                <p>got the right program for you.</p>
            </div>
            <div className="service-button">
                <h3>Explore More</h3>
            </div>
        </div>

        <div className="service-two">
                <div className="tranning-programs">
                    <h4>Tranning Programs</h4>
                </div>

                <div className="all-ages">
                        <div className="all-ages-left">
                            <h3>Program designed for</h3>
                            <h3>all ages and abilities</h3>
                        </div>
                        <div className="all-ages-right">
                            <div className="arrow-circle"><h1>/</h1></div>
                        </div>
                </div>

        </div>


        <div className="service-three">

            <div className="court-access">
                <div className="court-access-button">
                    <h4>Court Access</h4>
                </div>
                <div className="court-access-text">
                    <h2>Hourly Court Rental</h2>
                </div>
            </div>

            <div className="court-access-content">
                    <div className="access-content-up">
                        <h4>Step into a space built for</h4>
                        <h4>player - to grow, compete </h4>
                        <h4>and thrive</h4>
                    </div>
                    <div className="access-content-down">
                        <div className="access-content-down-circle"><h1>2</h1></div>
                        <div className="access-content-down-circle"><h1>3</h1></div>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Services