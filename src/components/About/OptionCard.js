import React, {useState} from 'react'

const OptionCard = ({options}) => {

    const [activeOpt, setActiveOpt] = useState(0)

    const renderOptions = () => {
        return options.map((opt, index) => {
            return(
                <li key = {index} className="form-check">
                    <input className="form-check-input" type="radio" name="option" id={`option${index}`} value={opt.title} />
                    <label 
                        className="form-check-label" 
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

        //TODO: edit card
        return(
            <div className = "activeOptionContainer">
                <div className = "activeText">{options[activeOpt].text}</div>
                <img src = {options[activeOpt].img} alt = {options[activeOpt].title} className = "activeImg" />
            </div>
        )
    }

    return(
        <div className = "aboutUsCard">
            <div className = "optionListContainer col-4">
                <ul className = "optionList">
                    {renderOptions()}
                </ul>
            </div>
            <div className = "content col-8">
                {renderOptionInfo()}
            </div>
        </div>
    )
}

export default OptionCard