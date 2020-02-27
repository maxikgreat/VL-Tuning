import React from 'react'
import Button from '../UI/Button'

const EndForm = () => {

    const onSubmitForm = (e) => {
        console.log("Submited")
    }


    return(
        <div className="wrapperPadding">
            <h2>Checkout</h2>
            <p>Leave your contact details. Our managers will contact you to clarify the details of the order.</p>
            <form>
                <div className="form-row">
                    <div className="col-6 mb-3">
                        <label htmlFor="validationDefault01">First name</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="First name" required/>
                    </div>
                    <div className="col-6 mb-3">
                        <label htmlFor="validationDefault02">Last name</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" required/>
                    </div>
                </div>
                <div className = "form-row">
                    <div className="col-12 mb-3">
                        <label htmlFor="validationDefault03">E-mail</label>
                        <input type="email" className="form-control" id="validationDefault03" placeholder="E-mail" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-6 mb-3">
                        <label htmlFor="validationDefault04">Phone</label>
                        <input type="tel" className="form-control" id="validationDefault04" placeholder="Phone" required />
                    </div>
                    <div className="col-3 mb-3">
                        <label htmlFor="validationDefault05">City</label>
                        <input type="text" className="form-control" id="validationDefault05" placeholder="City" required />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck1" required />
                        <label className="form-check-label" htmlFor="invalidCheck1">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <Button
                    //type = "submit"
                    onClickAction = {() => onSubmitForm()}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default EndForm