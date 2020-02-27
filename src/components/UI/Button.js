import React from 'react'

const Button = ({children, disabled = false, onClickAction, type}) => {

    const classes = ['brk-btn']
    if(disabled){
        classes.push('disabled')
    }
    return(
        <button 
            disabled = {disabled}
            className={classes.join(' ')}
            onClick = {onClickAction}
            type = {type}
        >
            {children}
        </button>
    )
}

export default Button