import React from 'react'

const InfoCard = ({title, introText, mainText}) => {
    return(
        <div className = "aboutUsCard">
            <div className = 'title col-3'>
                {title}
            </div>
            <div className = 'content col-9 h-100'>
                {introText}
                {mainText}
            </div>
        </div>
    )
}

export default InfoCard