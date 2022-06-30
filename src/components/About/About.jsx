import React from 'react'
import Title from "react-parallax-tilt"
import Typed from 'react-typed';
import "./About.scss"
// import { tw } from './twind/styled'
// import { animation, css } from 'twind/css'

// import Avatar, { Wireframe } from './Avatar'

const About = () => {
    return (
        <section class="about section" id="about">
            <h1 class="section__title glitch" data-text="About">About</h1>

            <div class="about__container container grid">
                <Title>
                    <div className='about__img'/>
                </Title>

                <div class="about__data">
                    <p className='about__title'>ECCコンピュータ専門学校WEBデザイン専攻3年</p>
                    <h3 class="about__heading">DUY KHUONG</h3>
                    <p class="about__description">
                        <Typed
                            strings={["私のアピールポイントは行動力と粘り強さです。<br>現在の専門学校へ入学した当初は、プログラミングの経験がなく全くできませんでした。そこで、弱点を克服するために、<br>毎日課題の復習と他の言語化にチャレンジし、放課後先生に教えていただいたり、ネット等を活用して<br>自習勉強をした結果、小さなアプリや色々なWebサイトを作成することができるようになりました。<br>今では自分の作りたいものを形にできるプログラミングが特に好きです。<br>Webサイトの構築を中心に知識を広げたり、フロントエンド開発で実装の経験を重ねて技術を磨きたいと思っており、<br>フロントと関わりのある技術も、自主的に勉強しています。<br>貴社入社後も、新しい技術や知識を積極的に身に付け、業務に活かしていきます。"]}
                            typeSpeed={50}
                        
                        />
                        {/* 私がアピールできるところは行動力です。<br/>
                        学生時代に勉強で悩んでいたときに、最初は自分で解決しようとしていました。<br/>
                        しかし限界が来て行き詰まってしまったときに思いきって友達や先生に相談したら、ふと気持ちが楽になって悩みも解決に向かいました。<br/>
                        このときに思ったのは、誰かに相談しようと思ったらすぐに行動していくことが大切だと解りました。<br/>
                        思い立ったときが最高のタイミングだと思い、それを実行することで自分にも後悔がないと感じたのです。<br/>
                        貴社でも持ち前の行動力を出して良い結果になるよう頑張ります。 */}
                    </p>

                    {/* <div class="about__info grid">
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
                    </div> */}
                    {/* <a href="" class="button">
                        <i class="uil uil-navigator button__icon"></i>
                        Contact Me
                    </a> */}
                </div>
            </div>
        </section>
    )
}  

export default About
