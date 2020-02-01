import React from 'react'
import Filter from './Filter'

const Filters = ({brand, model, stuff}) => {

    
    return(
        <div className = "filtersContainer row h-100">
            <div className = "col-3 wrapper">
                <Filter type = "brand"/>
            </div>
            {brand ? 
            <div className = "col-6 wrapper">
                <Filter type = "model"/>
            </div>
            : null
            }
            {model ? 
            <div className = "col-3 wrapper">
                <Filter type = "stuff"/>
            </div>
            : null
            }
        </div>
    )
}

export default Filters