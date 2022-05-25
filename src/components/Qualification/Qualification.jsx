import React from 'react'
import "./Qualification.scss"
const Qualification = () => {
    return (
        <section class="qualification section">
            <h1 class="section__title glitch" data-text="Qualification">Qualification</h1>

            <div class="qualification__container container grid">
                <div class="education">
                    <h3 class="qualification__title">
                        <i class="uil uil-graduation-cap"></i>
                        Education
                    </h3>

                    <div class="timeline">
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">A</h3>
                            <p class="timeline__text">Web Site / UX Design</p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">B</h3>
                            <p class="timeline__text">Web Site / UX Design</p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">C</h3>
                            <p class="timeline__text">Web Site / UX Design</p>
                        </div>
                    </div>
                </div>

                <div class="experience">
                    <h3 class="qualification__title">
                        <i class="uil uil-suitcase"></i>
                        Experience
                    </h3>

                    <div class="timeline">
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">A</h3>
                            <p class="timeline__text">Lead / Senior UX Design</p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">B</h3>
                            <p class="timeline__text">Web Site / UX Design</p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline__item">
                            <div class="circle__dot"></div>
                            <h3 class="timeline__title">C</h3>
                            <p class="timeline__text">Web Site / UX Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification