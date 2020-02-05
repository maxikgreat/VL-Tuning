import React from 'react'

export default function svgFilter(){
    return(
        <svg style ={{display: 'none'}}>
            <filter id="redFilter">
                <feColorMatrix
                    type="matrix"
                    values="1 0 0 0 0
                            0 0 0 0 0
                            0 0 0 0 0
                            0 0 0 1 0 "
                />
            </filter>
        </svg>
    )
}