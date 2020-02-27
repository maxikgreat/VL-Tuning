import React from 'react'
import bgImgPolicy from '../assets/images/policy/policyBg.jpg'



const PrivatePolicy = () => {

    const backgroundStyles = {
        backgroundImage: `url(${bgImgPolicy})`
    }

    return(
        <section className = "privatePolicy" style = {backgroundStyles}>
            <div className = "row h-100 wrapperPolicy" style={{background: 'rgba(0,0,0,0.5)'}}>
                
            </div>
        </section>
    )
}

export default PrivatePolicy