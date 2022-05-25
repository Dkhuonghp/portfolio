import React from 'react'
import "./Experience.scss"
import about_1 from "../../img/about01.png"
import about_2 from "../../img/about02.png"
import about_3 from "../../img/about03.png"
import about_4 from "../../img/about04.png"
const Experience = () => {
  return (
        <section class="skill section" id="skill">
            <h1 class="section__skill section__title glitch" data-text="My Experience">My Experience</h1>

            <div class="skills__container container grid">
                <div class="skills__tabs">
                    <div class="skills__header">

                        <div>
                            {/* <i class="uil uil-brackets-curly skills__icon"></i> */}
                            {/* <img src="https://image.shutterstock.com/z/stock-photo-female-frontend-developer-sitting-at-a-table-in-the-modern-office-digital-technology-concept-1542146108.jpg" alt="" /> */}
                            <img src={about_1} alt="" />
                            <h1 class="skills__title">Frontend developer</h1>
                            <span class="skills__subtitle">More than 3 years</span>
                            {/* <i class="uil uil-angle-down skill__arrow"></i> */}
                            <p className='p-text'>
                                専門学校でWebプログラマーとしての基礎を学んでいます。言語は「HTML5, CSS, JavaScript, TypeScript, SCSS, React.js, Tailwindcss」、ツールはと「Visual StudioCode, Github」を主に用いて作品をしております。
                            </p>
                        </div>
                    </div>
                    <div class="skills__header">

                        <div>
                            {/* <i class="uil uil-swatchbook skills__icon"></i> */}
                            {/* <img src="https://image.shutterstock.com/z/stock-vector-toolkit-ui-ux-scene-creator-mobile-application-design-smartphone-mockup-with-active-blocks-and-1794142201.jpg" alt="" /> */}
                            <img src={about_2} alt="" />
                            <h1 class="skills__title">Dsigner</h1>
                            <span class="skills__subtitle">More than 1 years</span>
                            <p className="p-text">
                                私が「Illustrator, Figma, Photoshop, AfterEffects」などのアプリケーションを用いたデザインの制作です。Webデザインの仕事の中でデザインを扱えることは必要とされるシーンによって多彩な表現ができることを目指してスキルアップの勉強をしております。
                            </p>
                        </div>
                    </div>
                    <div class="skills__header">

                        <div>
                            {/* <i class="uil uil-server-network skills__icon"></i> */}
                            {/* <img src="https://blog.logrocket.com/wp-content/uploads/2022/02/Creating-game-three-js.png" alt="" /> */}
                            <img src={about_3} alt="" />
                            <h1 class="skills__title">UX / UI</h1>
                            <span class="skills__subtitle">More than 2 years</span>
                            <p className="p-text">
                                私がいろいろな視点でWEBページを考察し、自ら組み立てていけるようなWEBデザイナーとしてスキルアップしていきたいと考えております。
                            </p>
                        </div>
                    </div>
                    <div class="skills__header">

                        <div>
                            {/* <i class="uil uil-server-network skills__icon"></i> */}
                            {/* <img src="https://moodle.ittux.edu.mx/pluginfile.php/24696/course/overviewfiles/Backend-Developer-1024x768.png" alt="" /> */}
                            <img src={about_4} alt="" />
                            <h1 class="skills__title">Animation</h1>
                            <span class="skills__subtitle">More than 2 years</span>
                            <p className="p-text">
                                重要な要素を動かすことで興味を引かせたり、飽きずに読み進めてもらうためのきっかけになったり、私が色々なアニメーションを勉強しております。                           
                            </p>
                        </div>
                    </div>
                    
                </div>

                <div class="skill__content">
                    <div class="skill__group">
                        <div class="skills__list grid">
                            <div class="skill__data">
                                <div class="skill__titles"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience