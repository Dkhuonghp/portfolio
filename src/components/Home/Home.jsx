import React from 'react'
import Typed from 'react-typed';
import "./Home.scss"


const Home = () => {
    return (
        
        <section class="home" id="home">
            <canvas className="plane-can" id="plane-canvas"></canvas>
            <canvas className="main-can" id="main-canvas"></canvas>
            <div className="background">
                <div className="home-background">
                <div className="bg-home-stars"></div>
                </div>
            </div>
            <div class="home__container container grid">
                <div class="home__social">
                    <span class="home__social-follow">Follow Me</span>
                    <div class="home__social-links">
                        <a href="" class="home__social-link">
                            <i class="uil uil-facebook-f"></i>
                        </a>
                        <a href="" class="home__social-link">
                            <i class="uil uil-instagram"></i>
                        </a>
                        <a href="" class="home__social-link">
                            <i class="uil uil-twitter"></i>
                        </a>
                    </div>
                </div>

                {/* <img src="./assets/img/home-img.png" alt="" class="home__img"> */}

                <div class="home__data">
                    <h1 class="home__title">Hi , I'm <span className='glitch' data-text="Khuong">Khuong</span></h1>
                    <h3 class="home__subtitle"><Typed strings={["Front-end","Back-end"]} typeSpeed = {100} loop/> Developer.</h3>
                    <p class="home__description">
                        high level experience in web design and developer knowledge,
                        product quality Work.
                    </p>
                    <div class="about__info grid">
                        <div class="about__box">
                            <i class="uil uil-award about__icon"></i>
                            <h3 class="about__title">Experience</h3>
                            <span class="about__subtitle">3 + Years</span>
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
                    <a href="" class="button">
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