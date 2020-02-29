import React from 'react'
import bgTwoParts from '../assets/images/aboutUs/aboutUsBg.jpg'
import InfoCard from '../components/About/InfoCard'
import OptionCard from '../components/About/OptionCard'
import visorImg from '../assets/images/aboutUs/visor.png'

const AboutUs = () => {

    const firstSlide = {
        title: <h2>who<br/>we<br/>are<br/>?</h2>,
        introText: <p className = "intro"><span>VL-Tuning</span> - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, excepturi. Nisi cupiditate, laborum temporibus incidunt</p>,
        mainText: <p className = "main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, qui. Iste, asperiores? Sit voluptatem perspiciatis iste corporis eos quibusdam beatae, sapiente unde id natus placeat, similique deserunt at aut quas?</p>
    }

    const secondSlide = {
        options: [{
            active: true,
            title: "Дефлектор окон",
            text: <p>Дефлектор окон Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, possimus.</p>,
            img: visorImg
        },{
            active: false,
            title: "Дефлектор капота",
            text: <p>Дефлектор капота Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, possimus.</p>,
            img: ""
        },{
            active: false,
            title: "Спойлер заднего стекла",
            text: <p>Спойлер заднего стекла Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, possimus.</p>,
            img: ""
        }]
    }

    const backgroundStyles = {
        backgroundImage: `url(${bgTwoParts})`
    }

    return(
        <section className = "aboutUs" style = {backgroundStyles}>
                <div className = "aboutUsCardsContainer">
                    <InfoCard 
                        title = {firstSlide.title}
                        introText = {firstSlide.introText}
                        mainText = {firstSlide.mainText}
                    />
                    <OptionCard 
                        options = {secondSlide.options}
                    />
                    <div className = "aboutUsCard">
                        <h1>Card 3</h1>
                    </div>
                </div>
        </section>
    )
}

export default AboutUs