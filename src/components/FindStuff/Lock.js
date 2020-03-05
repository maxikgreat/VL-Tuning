import React from 'react'
import lockSvg from '../../assets/images/lock.svg'


export default function Lock(){
    return(
        <div className = "lock">
            <img src = {lockSvg} alt = "Locked"/>
        </div>
    )
}