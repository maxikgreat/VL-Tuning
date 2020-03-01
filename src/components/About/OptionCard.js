import React, {useEffect, useState, useRef} from 'react'
import {useSpring, animated} from 'react-spring'

const OptionCard = ({options}) => {

    const [activeOpt, setActiveOpt] = useState(0)

    const listRef = useRef()

    useEffect(() => {
        const defaultOption = listRef.current.firstChild.firstChild
        defaultOption.checked = true
    }, [])

    const animProps = useSpring({
        to: {opacity: 1, transform: 'translateX(0%)'},
        from: {opacity: 0, transform: 'translateX(-100%)'},
        leave: {opacity: 0, transform: 'translateX(-100%)'}
    })

    const renderOptions = () => {
        return options.map((opt, index) => {
            return(
                <li key = {index} className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="option"
                        id={`option${index}`}
                        value={opt.title}
                    />
                    <label
                        className = {index === 0 ? "form-check-label defaultChecked" : "form-check-label notDefaultChecked"}
                        htmlFor={`option${index}`}
                        onClick = {() => {setActiveOpt(index)}}
                    >
                        {opt.title}
                    </label>
                </li>
            )
        })
    }

    const renderOptionInfo = () => {
        return(
            <animated.div style = {animProps} className = "activeOptionContainer">
                <div className = "activeText col-7">{options[activeOpt].text}</div>
                <div className = "activeImg col-5">
                    <img src = {options[activeOpt].img} alt = {options[activeOpt].title}/>
                </div>
            </animated.div>
        )
    }

    return(
        <div className = "aboutUsCard">
            <div className = "optionListContainer col-3">
                <ul className = "optionList" ref = {listRef}>
                    {renderOptions()}
                </ul>
            </div>
            <div className = "content col-9">
                {renderOptionInfo()}
            </div>
        </div>
    )
}

export default OptionCard