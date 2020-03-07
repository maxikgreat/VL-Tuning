import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import CustomMap from './CustomMap'

const ContactUs = ({title}) => {
    return(
        <div className = "aboutUsCard">
            <div className = "title col-3">
                {title}
            </div>
            <div className = "content col-12 col-md-9">
                <div className = "borderedContainer">
                    <div className = "col-12 col-md-5">
                        <div className = "phonesContainer sTitle">
                            <span>Звоните:</span>
                            <div className = "phones">
                                <div className = "phone">
                                    <FontAwesomeIcon icon = "phone-square-alt" /><a href="tel:+380635274489">+38 (063) 527 44 89</a>
                                </div>
                                <div className = "phone">
                                    <FontAwesomeIcon icon = "phone-square-alt" /><a href="tel:+380995663999">+38 (099) 566 39 99</a>
                                </div>
                                <div className = "phone">
                                    <FontAwesomeIcon icon = "phone-square-alt" /><a href="tel:+380972592135">+38 (097) 259 21 35</a>
                                </div>
                            </div>
                        </div>А
                        <div className = "emailsContainers sTitle">
                            <span>Пишите:</span>
                            <div className = "emails">
                                <div className = "email">
                                    <FontAwesomeIcon icon = "envelope" /><a href="mailto:vadim.74@ukr.net">vadim.74@ukr.net</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className= "col-7 mapContainer">
                        <CustomMap />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactUs