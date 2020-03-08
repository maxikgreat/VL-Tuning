import React from 'react'
import loaderImg from '../../assets/images/vl-tunLogo.png'

const Loader = () => {
  return(
      <section className = "mainLoader">
        <img src = {loaderImg} alt = "loadimage"/>
        <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
        </div>
      </section>
  )
}

export default Loader