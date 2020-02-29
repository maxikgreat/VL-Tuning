import React from 'react'

const InfoCard = ({title, introText, mainText}) => {
    return(
        <div className = "aboutUsCard">
            <div className = 'title col-4'>
                {title}
            </div>
            <div className = 'content col-8 h-100'>
                {introText}
                {mainText}
            </div>
        </div>
    )
}

export default InfoCard