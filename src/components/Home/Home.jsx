import React from 'react'
import Typed from 'react-typed';

const position = ["Front-end","Back-end"]
const description = 'high level experience in web design and developer knowledge, product quality Work.'

const Home = () => {
    return (
        <section class="home" id="home">
            <div class="home__container container grid">
                <div class="home__data">
                    <h1 class="home__title">Hi , I'm <span className='glitch' data-text="KHUONG">KHUONG</span></h1>
                    <h3 class="home__subtitle"><Typed strings={position} typeSpeed = {100} loop/> Developer.</h3>
                    <p class="home__description">
                        <Typed strings={[description]} typeSpeed = {30}/>
                    </p>
                    <div class="about__info grid">
                        <div class="about__box">
                            <i class="uil uil-award about__icon"></i>
                            <h3 class="about__title">Experience</h3>
                            <span class="about__subtitle">3 Years</span>
                        </div>
                        <div class="about__box">
                            <i class="uil uil-suitcase-alt about__icon"></i>
                            <h3 class="about__title">Completed</h3>
                            <span class="about__subtitle">40 + Project</span>
                        </div>
                        <div class="about__box">
                            <i class="uil uil-headphones about__icon"></i>
                            <h3 class="about__title">Support</h3>
                            <span class="about__subtitle">24/7</span>
                        </div>
                    </div>
                    <a href="#about" class="button">
                        <i class="uil uil-user button__icon"></i>
                        More About Me
                    </a>
                </div>

                {/* <div class="my__info">
                    <div class="info__item">
                        <i class="uil uil-facebook-messenger info__icon"></i>
                        <div>
                            <h3 class="info__title">Messenger</h3>
                            <span class="info__subtitle">Nguyen Duy Khuong</span>
                        </div>
                    </div>
                    <div class="info__item">
                        <i class="uil uil-whatsapp info__icon"></i>
                        <div>
                            <h3 class="info__title">Tell</h3>
                            <span class="info__subtitle">080-4710-2613</span>
                        </div>
                    </div>
                    <div class="info__item">
                        <i class="uil uil-envelope-edit info__icon"></i>
                        <div>
                            <h3 class="info__title">Email</h3>
                            <span class="info__subtitle">khuonghp97@gmail.com</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Home
