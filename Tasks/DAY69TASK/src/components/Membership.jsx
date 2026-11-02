import React from 'react'
import './Membership.css'

const Faq = () => {
  return (
    <div className='faq-main'>
        <div className="faq-left">
            <div className="membership-card">
                <div className="card-first">
                    <div className="card-plan">
                        <h5>Most Popular Plan</h5>
                    </div>
                    <div className="card-price">
                        <div className="price"><h1>120$</h1></div>
                        <div className="month"><h5>/month</h5></div>
                        
                    </div>
                </div>

                <div className="card-second">
                    <h1>Pro Membership</h1>
                </div>

                <div className="card-third">

                    <div className="card-third-h4"> <h4>8 group classes</h4></div>
                    <div className="card-third-h4"><h4>4 court hours</h4></div>
                    <div className="card-third-h4"><h4>2 private lesson</h4></div>
                    <div className="card-third-h4"><h4>club tournament access</h4></div>

                </div>
                <div className="card-fourth">

                        <div className="card-fourth-button"><h4>Buy membership</h4></div>
                </div>
                
            </div>

            <div className="basic-plan">
                    <div className="basic-plan-text"><h3>Basic Plan</h3></div>
                    <div className="view-features"><h4>View Features</h4></div>
            </div>

            <div className="elite-plan">
                <div className="basic-plan-text"><h3>Elite Plan</h3></div>
                <div className="view-features"><h4>View Features</h4></div>
            </div>
        </div>
        <div className="faq-right">

            <div className="membership">
                <h6>Memberships</h6>
            </div>

            <div className="membership-content">
                <h1>Three refined membership</h1>
                <h1>plans - elevate your game.</h1>
            </div>

            <div className="membership-content-h4">
                <h4><span>Personalized benefits. Permium</span></h4>
                <h4><span>experience. One decision away</span></h4>
            </div>

            <div className="court-img">
                <img src="./court.png" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Faq