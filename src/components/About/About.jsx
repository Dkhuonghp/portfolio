import React from 'react'
import Title from "react-parallax-tilt"
import Typed from 'react-typed';

const typings = `
    私のアピールポイントは行動力と粘り強さです。
    <br>専門学校へ入学した当初は、プログラミングの経験がなく全くできませんでした。
    そこで、弱点を克服するために、<br>毎日課題の復習と他の言語化にチャレンジし、
    放課後先生に教えていただいたり、ネット等を活用して<br>自習勉強をした結果、
    小さなアプリや色々なWebサイトを作成することができるようになりました。<br>
    今では自分の作りたいものを形にできるプログラミングが特に好きです。<br>
    Webサイトの構築を中心に知識を広げたり、フロントエンド開発で実装の経験を重ねて技術を磨きたいと思っており、<br>
    フロントと関わりのある技術も、自主的に勉強しています。<br>
    貴社入社後も、新しい技術や知識を積極的に身に付け、業務に活かしていきます。
`
const About = () => {
    return (
        <section class="about section" id="about">
            <h1 class="section__title glitch" data-text="About">About</h1>

            <div class="about__container container grid">
                <Title>
                    <div className='about__img'/>
                </Title>

                <div class="about__data">
                    <p className='about__title'>ECCコンピュータ専門学校マルチメディア研究学科WEBデザイン専攻3年</p>
                    <h3 class="about__heading">DUY KHUONG</h3>
                    <p class="about__description">
                        <Typed
                            strings={[typings]}
                            typeSpeed={50}
                        
                        />
                    </p>
                </div>
            </div>
        </section>
    )
}  

export default About
