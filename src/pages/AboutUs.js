import React from 'react'
import bgTwoParts from '../assets/images/aboutUs/aboutUsBg.jpg'
import InfoCard from '../components/About/InfoCard'
import OptionCard from '../components/About/OptionCard'
import WorkWithCard from '../components/About/WorkWithCard'
import visorImg from '../assets/images/aboutUs/visor.png'
import hoodImg from '../assets/images/aboutUs/hood.jpg'
import backImg from '../assets/images/aboutUs/back.jpg'
import cobraWork from '../assets/images/aboutUs/cobraWork.png'
import faberWork from '../assets/images/aboutUs/faberWork.png'
import alviWork from '../assets/images/aboutUs/alviWork.png'
import vt52Work from '../assets/images/aboutUs/vt52Work.jpg'
import simWork from '../assets/images/aboutUs/simWork.png'
import ContactUs from "../components/About/ContactUs";

const AboutUs = () => {

    const infoSlide = {
        title: <h2>who<br/>we<br/>are<br/>?</h2>,
        introText: <p className = "intro"><span>VL-Tuning</span> - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, excepturi. Nisi cupiditate, laborum temporibus incidunt</p>,
        mainText: <p className = "main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, qui. Iste, asperiores? Sit voluptatem perspiciatis iste corporis eos quibusdam beatae, sapiente unde id natus placeat, similique deserunt at aut quas?</p>
    }

    const optionSlide = {
        options: [{
            active: true,
            title: "Дефлектор окон",
            text: <p>Дефлектор окон Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, possimus.</p>,
            img: visorImg
        },{
            active: false,
            title: "Дефлектор капота",
            text: <p>Дефлектор капота Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, possimus.</p>,
            img: hoodImg
        },{
            active: false,
            title: "Спойлер заднего стекла",
            text: <p>Спойлер заднего стекла Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, possimus.</p>,
            img: backImg
        }]
    }

    const partnersSlide = {
        title: <h2>we<br />work<br/>with</h2>,
        intro: <p className = "withPartnersText">Intro text for Partners</p>,
        workWithList: [cobraWork, faberWork, vt52Work, simWork, alviWork]
    }

    const contactSlide = {
        title: <h2>con<br/>tact<br/>us</h2>
    }
    const findSlide = {
        title: <h2>find<br/>us</h2>,
    }




    const backgroundStyles = {
        backgroundImage: `url(${bgTwoParts})`
    }

    return(
        <section className = "aboutUs" style = {backgroundStyles}>
                <div className = "aboutUsCardsContainer">
                    <InfoCard 
                        title = {infoSlide.title}
                        introText = {infoSlide.introText}
                        mainText = {infoSlide.mainText}
                    />
                    <OptionCard 
                        options = {optionSlide.options}
                    />
                    <WorkWithCard
                        title = {partnersSlide.title}
                        intro = {partnersSlide.intro}
                        workWithList={partnersSlide.workWithList}
                    />
                    <ContactUs
                        title = {contactSlide.title}
                    />
                </div>
        </section>
    )
}

export default AboutUs