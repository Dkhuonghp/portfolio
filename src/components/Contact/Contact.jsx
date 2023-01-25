import React from 'react'
import ReactDOM from "react-dom";

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc() {
    let parent = this.parentNode;
    if(this.value === "") {
        parent.classList.remove("focus");
    }
}
inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

const Contact = () => {
  return (
    <section className="contact section" id='contact'>
      <h1 className="section__title glitch" data-text="Contact">Contact</h1>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i class="uil uil-facebook-messenger info__card-icon"></i>
              <h3 className="contact__card-title">Message</h3>
              <span className="contact__card-data">Nguyen Duy khuong</span>
              {/* <span className="contact__button">
                Write me
              </span> */}
            </div>
            <div className="contact__card">
              <i class="uil uil-whatsapp info__card-icon"></i>
              <h3 className="contact__card-title">Tell</h3>
              <span className="contact__card-data">080-4710-2613</span>
              {/* <span className="contact__button">
                Write me
              </span> */}
            </div>
            <div className="contact__card">
              <i class="uil uil-envelope-edit info__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">khuonghp97@gmail.com</span>
              {/* <span className="contact__button">
                Write me
              </span> */}
            </div>
          </div>
        </div>
        <div className="contact__content">
          <from className="contact__form">
            <div className="input__container">
              {/* <label htmlFor="">Username</label> */}
              <input type="text" className="input" placeholder='Username'/>
              {/* <span>Username</span> */}
            </div>
            <div className="input__container">
              {/* <label htmlFor="">Gmail</label> */}
              <input type="text" className="input" placeholder='Gmail'/>
              {/* <span>Gmail</span> */}
            </div>
            <div className="input__container">
              {/* <label htmlFor="">Phone</label> */}
              <input type="text" className="input" placeholder='Phone'/>
              {/* <span>Phone</span> */}
            </div>
            <div className="input__container textarea">
              {/* <label htmlFor="">Massage</label> */}
              <textarea name="" id="" className='input' placeholder='Massage'></textarea>
              {/* <span>Username</span> */}
            </div>

            <a className="button">
              <i className='uil uil-navigator button__icon'></i>
              Send
            </a>
          </from>
        </div>
      </div>
    </section>
  )
}



export default Contact