import React from 'react'
import "./Destinationstyle.css";



const DestinationsData = (props) => {
  return (
    <>
       <div className={props.className}>
        <div className="text-des">
          <h2>{props.heading}</h2>
          <p>{props.text}
          </p>
        </div>
        <div className="image">
          <img src={props.img1} alt="temple" />
          <img src={props.img2} alt="scene" />
        </div>
      </div>
    </>
  )
}

export default DestinationsData