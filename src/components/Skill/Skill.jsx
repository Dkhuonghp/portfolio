import React from 'react'
import Title from "react-parallax-tilt"


const frontend = '"HTML" , "CSS" , "JavaScript" , "Pug" , "Sass" , "ReactjS" , "ThreejS", "Nodejs"'
const backend = '"FireBase", "Mongodb"'
const tools = '"Visual Studio Code", "Xcode", "Github"'
const design = '"Photoshop" , "Illustrator" , "AfterEffect" , "Premiere" , "XD"'

const Skill = () => {
    return (
        <section className="section">
            <h1 className='glitch' data-text="Skill">Skill</h1>
            <Title className="parallax" perspective={20000} glareEnable={true} glareMaxOpacity={0.1} scale={1} gyroscope={true}>

                <div className="wrapper" id="services" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
                    <div className="profile"> 
                        <div className="iconWrap">

                            <div className="icon iconBtn1"></div>
                            <div className="icon iconBtn2"></div>
                            <div className="icon iconBtn3"></div>

                        </div>
                        <div className="container-code">
                            <p className="codeWrap" data-value="1">
                                <span className="code left-3">
                                    <span className="mtk15">class</span>
                                    <span className="mtk18">User</span>
                                    <span className="bracket-highlighting-left-0"></span>

                                </span>
                            </p>
                            <p className="codeWrap" data-value="2">
                                <span className="code left">
                                    <span className="mtk15">constructor</span>
                                    <span className="barackets_4"></span>
                                    <span className="barackets_5"></span>
                                    <span className="bracket-highlighting-left-1"></span>

                                </span>
                            </p>
                            <div className="user">
                                <p className="codeWrap" data-value="3">
                                    <span className="code left-2">
                                        <span className="mtk3 mtki">this</span>
                                        <span className="brackets">.</span>
                                        <span className="mtk18">name</span>
                                        <span className="barackets_2">=</span>
                                        <span className="mtk14">"Nguyen Duy Khuong"</span>
                                    </span>
                                </p>
                                <p className="codeWrap" data-value="4">
                                    <span className="code left-2">
                                        <span className="mtk3 mtki">this</span>
                                        <span className="brackets">.</span>
                                        <span className="mtk18">birthday</span>
                                        <span className="barackets_2">=</span>
                                        <span className="mtk14">"1997年1月13日"</span>
                                    </span>
                                </p>
                                <p className="codeWrap" data-value="5">
                                    <span className="code left-2">
                                        <span className="mtk3 mtki">this</span>
                                        <span className="brackets">.</span>
                                        <span className="mtk18">age</span>
                                        <span className="barackets_2">=</span>
                                        <span className="mtk14">"26"</span>
                                    </span>
                                </p>
                                <p className="codeWrap" data-value="6">
                                    <span className="code left-2">
                                        <span className="mtk3 mtki">this</span>
                                        <span className="brackets">.</span>
                                        <span className="mtk18">country</span>
                                        <span className="barackets_2">=</span>
                                        <span className="mtk14">"Viet Nam"</span>
                                    </span>
                                </p>
                                <p className="codeWrap" data-value="7">
                                    <span className="code left-2">
                                        <span className="mtk3 mtki">this</span>
                                        <span className="brackets">.</span>
                                        <span className="mtk18">school</span>
                                        <span className="barackets_2">=</span>
                                        <span className="mtk14">"ECC computer"</span>
                                    </span>
                                </p>
                            </div>
                            <p className="codeWrap" data-value="8">
                                <span className="code left">
                                    <span className="bracket-highlighting-right-1"></span>
                                </span>

                            </p>
                            <p className="codeWrap" data-value="9">
                                <span className="code flex left">
                                    <span className="mtk5">frontEnd</span>
                                    <span className="barackets_4"></span>
                                    <span className="barackets_5"></span>
                                    <span className="bracket-highlighting-left-1"></span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="10">
                                <span className="code left-2 flex">
                                    <span className='mtk15'>return</span>
                                    <span className="mtk14">
                                        <span className='mtk1'></span>
                                            {frontend}
                                        <span className='mtk2'></span>
                                    </span>
                                </span>
                            </p>
                            <p class="codeWrap" data-value="11">
                                <span class="code left">
                                    <span class="bracket-highlighting-right-1"></span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="12">
                                <span className="code flex left">
                                <span className="mtk5">backEnd</span>
                                    <span className="barackets_4"></span>
                                    <span className="barackets_5"></span>
                                    <span className="bracket-highlighting-left-1"></span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="13">
                                <span className="code left-2 flex">
                                    <span className='mtk15'>return</span>
                                    <span className="mtk14">
                                        <span className='mtk1'></span>
                                            {backend}
                                        <span className='mtk2'></span>
                                    </span>
                                </span>
                            </p>
                            <p class="codeWrap" data-value="14">
                                <span class="code left">
                                    <span class="bracket-highlighting-right-1"></span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="15">
                                <span className="code flex left">
                                <span className="mtk5">iosDeveloper</span>
                                    <span className="barackets_4"></span>
                                    <span className="barackets_5"></span>
                                    <span className="bracket-highlighting-left-1"></span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="16">
                                <span className="code left-2 flex">
                                    <span className='mtk15'>return</span>
                                    <span className="mtk14">
                                        <span className='mtk1'></span>
                                            "Swift"
                                        <span className='mtk2'></span>
                                    </span>
                                </span>
                            </p>
                            <p class="codeWrap" data-value="17">
                                <span class="code left">
                                    <span class="bracket-highlighting-right-1"></span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="18">
                                <span className="code flex left">
                                <span className="mtk5">tools</span>
                                    <span className="barackets_4"></span>
                                    <span className="barackets_5"></span>
                                    <span className="bracket-highlighting-left-1"></span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="19">
                                <span className="code left-2 flex">
                                    <span className='mtk15'>return</span>
                                    <span className="mtk14">
                                        <span className='mtk1'></span>
                                            {tools}
                                        <span className='mtk2'></span>
                                    </span>
                                </span>
                            </p>
                            <p class="codeWrap" data-value="20">
                                <span class="code left">
                                    <span class="bracket-highlighting-right-1"></span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="21">
                                <span className="code flex left">
                                <span className="mtk5">design</span>
                                    <span className="barackets_4"></span>
                                    <span className="barackets_5"></span>
                                    <span className="bracket-highlighting-left-1"></span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="22">
                                <span className="code left-2 flex">
                                    <span className='mtk15'>return</span>
                                    <span className="mtk14">
                                        <span className='mtk1'></span>
                                            {design}
                                        <span className='mtk2'></span>
                                    </span>
                                </span>
                            </p>
                            <p class="codeWrap" data-value="23">
                                <span class="code left">
                                    <span class="bracket-highlighting-right-1"></span>
                                </span>
                            </p>
                            <p class="codeWrap" data-value="24">
                                <span class="code left_2">
                                    <span class="bracket-highlighting-right-0"></span>
                                    <span className='typed'></span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Title>
        </section>
    )
}

export default Skill
