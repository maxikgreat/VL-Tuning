import React from 'react'

const Button = ({children, disabled = false, onClickAction}) => {

    const classes = ['brk-btn']
    if(disabled){
        classes.push('disabled')
    }
    return(
        <button 
            disabled = {disabled}
            className={classes.join(' ')}
            onClick = {onClickAction}
        >
            {children}
        </button>
    )
}

export default Button