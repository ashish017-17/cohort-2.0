import React from 'react'
import './Rythym.css'

const Rythym = () => {
  return (
    <div className='rythym-main'>
        <div className="rythym-left">
            <div className="feel-our-rythym">
                <h5>Feel Our Rythym</h5>
            </div>

            <div className="rythym-left-content">
                <p>"As a busy mom who hadn't played since</p>
                <p>college, Horizount made my comeback</p>
                <p>magical. Coach Lisa transformed my slice</p>
                <p>into a weapon - now my husband refuses</p>
                <p>to play me."</p>
            </div>

            <div className="rythym-left-stars">
                <h4>⭐⭐⭐⭐⭐ 4.8</h4>
            </div>

            <div className="rythym-left-champion">
                <div className="rythym-left-champion-content">
                    <h1>Skylar Bennett</h1>
                    <h5>Amateur Champion</h5>
                </div>

                <div className="rythym-left-circle">
                    <div className="white-circle"></div>
                    <div className="blue-circle"></div>
                </div>

            </div>
        </div>



        <div className="rythym-right">

                <div className="rythym-right-up">
                    <div className="zero-one">
                        <h1>01</h1>
                    </div>
                    <div className="eight">
                        <h4><span>/8</span></h4>
                    </div>
                </div>
                
                <div className="champion-img"></div>
        </div>
    </div>  
  )
}

export default Rythym