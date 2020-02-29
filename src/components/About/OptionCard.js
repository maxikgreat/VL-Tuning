import React from 'react'

const OptionCard = ({options}) => {

    const renderOptions = () => {
        return options.map((opt, index) => {
            return(
                <li key = {index} className="form-check">
                    <input className="form-check-input" type="radio" name="option" id={`option${index}`} value={opt.title} />
                    <label className="form-check-label" htmlFor={`option${index}`}>
                        {opt.title}
                    </label>
                </li>
            )
        })
    }

    return(
        <div className = "aboutUsCard">
            <div className = "optionListContainer col-4">
                <ul className = "optionList">
                    {renderOptions()}
                </ul>
            </div>
            <div className = "content col-8">
                Content
            </div>
        </div>
    )
}

export default OptionCard