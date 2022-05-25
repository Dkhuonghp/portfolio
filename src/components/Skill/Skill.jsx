import React from 'react'
import Title from "react-parallax-tilt"
import "./Skill.scss"
import "../Glitch_Text_Animation/Glitch.scss"
const Skill = () => {
  return (
    <section className="section">
        <h1 className='glitch' data-text="Skill">Skill</h1>
        <Title className="parallax" perspective={5000} glareEnable={true} glareMaxOpacity={0.2} scale={1.02} gyroscope={true}>

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
                                <span className="class">function</span>
                                <span className="className">user</span>
                                <span className="barackets"></span>

                            </span>
                        </p>
                        <p className="codeWrap" data-value="2">
                            <span className="code left">
                                <span className="class">profile</span>
                                <span className="barackets_4"></span>
                                <span className="barackets_5"></span>
                                <span className="barackets"></span>

                            </span>
                        </p>
                        <div className="user">
                            <p className="codeWrap" data-value="3">
                                <span className="code left-2">
                                    <span className="property">this</span>
                                    <span className="brackets">.</span>
                                    <span className="methods">name</span>
                                    <span className="barackets_2">=</span>
                                    <span className="string">"Nguyen Duy Khuong"</span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="4">
                                <span className="code left-2">
                                    <span className="property">this</span>
                                    <span className="brackets">.</span>
                                    <span className="methods">birthday</span>
                                    <span className="barackets_2">=</span>
                                    <span className="string">"1996/1/13"</span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="5">
                                <span className="code left-2">
                                    <span className="property">this</span>
                                    <span className="brackets">.</span>
                                    <span className="methods">age</span>
                                    <span className="barackets_2">=</span>
                                    <span className="string">"26"</span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="6">
                                <span className="code left-2">
                                    <span className="property">this</span>
                                    <span className="brackets">.</span>
                                    <span className="methods">country</span>
                                    <span className="barackets_2">=</span>
                                    <span className="string">"Viet Nam"</span>
                                </span>
                            </p>
                            <p className="codeWrap" data-value="7">
                                <span className="code left-2">
                                    <span className="property">this</span>
                                    <span className="brackets">.</span>
                                    <span className="methods">school</span>
                                    <span className="barackets_2">=</span>
                                    <span className="string">"ECC computer"</span>
                                </span>
                            </p>
                        </div>
                        <p className="codeWrap" data-value="8">
                            <span className="code left">
                                <span className="barackets_3"></span>
                            </span>

                        </p>
                        <p className="codeWrap" data-value="9">
                            <span className="code flex left">
                                <span className="static">static</span>
                                <span className="className">user</span>
                                <span className="barackets_4"></span>
                                <span className="methods">front-end</span>
                                <span className="barackets_5"></span>
                                <span className="barackets"></span>
                            </span>
                        </p>
                        <p className="codeWrap" data-value="10">
                            <span className="code left-2 flex">
                                <span className='static'>return</span>
                                <span className='methods'>front-end</span>
                                <span className="barackets_2">=</span>
                                <span className="string_2">[ "HTML" , "CSS" , "JavaScript" , "Pug" , "SCSS" , "ReactJS" , "ThreeJS" , "TailwindCSS" ]</span>
                            </span>
                        </p>
                        <p class="codeWrap" data-value="11">
                            <span class="code left">
                                <span class="barackets_3"></span>
                            </span>
                        </p>
                        <p className="codeWrap" data-value="12">
                            <span className="code flex left">
                                <span className="static">static</span>
                                <span className="className">user</span>
                                <span className="barackets_4"></span>
                                <span className="methods">back-end</span>
                                <span className="barackets_5"></span>
                                <span className="barackets"></span>
                            </span>
                        </p>
                        <p className="codeWrap" data-value="13">
                            <span className="code left-2 flex">
                                <span className='static'>return</span>
                                <span className='methods'>back-end</span>
                                <span className="barackets_2">=</span>
                                <span className="string_2">[ "PHP" , "MySQL" , "FireBase" ]</span>
                            </span>
                        </p>
                        <p class="codeWrap" data-value="14"><span class="code left"><span class="barackets_3"></span></span></p>
                        <p className="codeWrap" data-value="15">
                            <span className="code flex left">
                                <span className="static">static</span>
                                <span className="className">user</span>
                                <span className="barackets_4"></span>
                                <span className="methods">ios-developer</span>
                                <span className="barackets_5"></span>
                                <span className="barackets"></span>
                            </span>
                        </p>
                        <p className="codeWrap" data-value="16">
                            <span className="code left-2 flex">
                                <span className='static'>return</span>
                                <span className='methods'>ios-developer</span>
                                <span className="barackets_2">=</span>
                                <span className="string_2">[ "Swift" ]</span>
                            </span>
                        </p>
                        <p class="codeWrap" data-value="17"><span class="code left"><span class="barackets_3"></span></span></p>
                        <p className="codeWrap" data-value="18">
                            <span className="code flex left">
                                <span className="static">static</span>
                                <span className="className">user</span>
                                <span className="barackets_4"></span>
                                <span className="methods">design</span>
                                <span className="barackets_5"></span>
                                <span className="barackets"></span>
                            </span>
                        </p>
                        <p className="codeWrap" data-value="19">
                            <span className="code left-2 flex">
                                <span className='static'>return</span>
                                <span className='methods'>design</span>
                                <span className="barackets_2">=</span>
                                <span className="string_2">[ "Photoshop" , "Illustrator" , "AfterEffect" , "Premiere" , "XD" ]</span>
                            </span>
                        </p>
                        <p class="codeWrap" data-value="20"><span class="code left"><span class="barackets_3"></span></span></p>
                        <p class="codeWrap" data-value="21"><span class="code left_2"><span class="barackets_3"></span></span></p>
                    </div>
                    
                </div>
            </div>
        </Title>
    </section>
  )
}

export default Skill
