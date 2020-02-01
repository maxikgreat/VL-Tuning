import React from 'react'
import Particles from 'react-particles-js';


const BackgroundParticles = () => {
    return(
        <div style={{width: "100%", position: "absolute", opacity: 0.4}}>
        <Particles 
            height = "100vh"
            params={{
                "particles": {
                    "number": {
                        "value": 150
                    },
                    "size": {
                        "value": 3
                    },
                    "line_linked":{
                        "color": "#ffffff",
                        "distance": "100",
                        "width": "2"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        }
                    }
                }
            }}
        />
        </div>
    )
}


export default BackgroundParticles

