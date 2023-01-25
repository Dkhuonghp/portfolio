import React from 'react'
import Logo from "../../img/logo.svg"
const Border = () => {
  return (
    <div className='section'>
        <div className="css_21">
            <a href="#home">
                <img src={Logo} alt="logo" />
            </a>
        </div>
        <div className="css_20">
            <div className="loader-radar"></div>
        </div>
        <div className="css_19"></div>
        <div className="css_18"></div>
        <div className="css_17">
            <div className='flipboard-load-more wrapper'>
                <div className='glow-load-more-btn js-glow-load-more-btn load-more-wrapper'>
                    <div className='sec-left'></div>
                    <div className='chevron left'></div>
                    <div className='sec-middle'>
                        <div className="label-inner off">
                            <div id="myDIV">
                                <a href="#home" className='btn'>Home</a>
                                <a href="#about" className='btn'>About</a>
                                <a href="#skill" className='btn'>Skill</a>
                                <a href="#works" className='btn'>Works</a>
                                <a href="#contact" className='btn'>Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="chevron right"></div>
                    <div className="sec-right"></div>
                </div>
            </div>
        </div>
        <div className="css_16"></div>
        <div className="css_15"></div>
        <div className="css_14"></div>

        <ul className="sm-tabs">
            <li>
                <a href="">
                    <span>Search</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Language</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Setting</span>
                </a>
            </li>
        </ul>

        <ul className="sm-tabs-2">
            <li>
                <a href="">
                    <span>Facebook</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/Dkhuonghp" target="_blank">
                    <span>Github</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Twitter</span>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Border