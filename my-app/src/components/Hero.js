import React from 'react'
import "./HeroStyle.css"
import {Link} from "react-router-dom"

const Hero = (props) => {
  return (
    <>
      <div className={props.className}>
        <img src={props.heroImage} alt="HeroImage"/>
        </div>
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Link to={props.url} className={props.btnClass}>{props.buttonText}</Link>
            </div> 
    </>
  )
}

export default Hero