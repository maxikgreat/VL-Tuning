import React from 'react'

const InfoCard = ({title, intro, workWithList}) => {

    const renderItems = () => {
        return workWithList.map((item, index) => {
            return(
                <li
                    key = {index}
                    className = "workItem"
                >
                    <img src = {item} alt = "Partner"/>
                </li>
            )
        })
    }

    return(
        <div className = "aboutUsCard">
            <div className = 'title col-3'>
                {title}
            </div>
            <div className = 'content col-9'>
                {intro}
                <ul className = "workWithContainer">
                    {renderItems()}
                </ul>
            </div>
        </div>
    )
}

export default InfoCard