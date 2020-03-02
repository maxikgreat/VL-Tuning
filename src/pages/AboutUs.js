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
        title: <h2>кто<br/>мы<br/>такие<br/>?</h2>,
        introText: <p className = "intro"><span>VL-Tuning</span> - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, excepturi. Nisi cupiditate, laborum temporibus incidunt</p>,
        mainText: <p className = "main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, qui. Iste, asperiores? Sit voluptatem perspiciatis iste corporis eos quibusdam beatae, sapiente unde id natus placeat, similique deserunt at aut quas?</p>
    }

    const optionSlide = {
        options: [{
            active: true,
            title: "Дефлектор окон",
            text: <div>
                <p className = "main">Брызги грязи и разрушительные потоки воздуха не ворвутся в салон вашего автомобиля, если он оборудован дефлекторами окон.</p>
                <ul>
                    <li className="liItem">всегда чистые боковые окна</li>
                    <li className="liItem">на скорости при приоткрытом окне естественная циркуляция воздуха в салоне (актуально за городом и для того кто курит) и в дождь вода не будет затекать при открытом окне</li>
                    <li className="liItem">дополнительная защита от солнечных лучей</li>
                </ul>
                </div>
                ,
            img: visorImg
        },{
            active: false,
            title: "Дефлектор капота",
            text: <div>
                <p className = "main">Cоздает восходящий поток воздуха что бы уберечь лобовое стекло и щетки стеклоочистителя от загрязнений.</p>
                <ul>
                    <li className="liItem">делают переднюю часть автомобиля более выразительной</li>
                    <li className="liItem">при движении со скоростью от 70 км/час ваше авто будет защищать некий воздушный щит, подхватывающий и перебрасывающий через него все попадающиеся на пути мелкие предметы</li>
                    <li className="liItem">обеспечивают возможность предотвращения ДТП, ведь даже маленький камушек попавший на лобовое стекло, на несколько секунд дезориентирует водителя</li>
                </ul>
            </div>,
            img: hoodImg
        },{
            active: false,
            title: "Спойлер заднего стекла",
            text: <div>
                <p className = "main">Такое простое, часто недорогое решение может позволить создать завершённый облик автомобиля.</p>
                <ul>
                    <li className="liItem">защита от грязи заднего стекла автомобиля</li>
                    <li className="liItem">прижимная сила воздуха, воздействующая на заднюю ось автомобиля</li>
                    <li className="liItem">декоративная функция</li>
                </ul>
            </div>,
            img: backImg
        }]
    }

    const partnersSlide = {
        title: <h2>мы <br />рабо<br/>таем<br/>с</h2>,
        intro: <p className = "withPartnersText">Мы доверяем / Нам доверяют</p>,
        workWithList: [cobraWork, faberWork, vt52Work, simWork, alviWork]
    }

    const contactSlide = {
        title: <h2>на<br/>пи<br/>ши<br/>нам<br/></h2>
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