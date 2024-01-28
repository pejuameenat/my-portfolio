import React from 'react';


function contactValidation(){
        const inputs = document.querySelectorAll('input')
        const textArea = document.querySelector('textarea')
        const errorMsg = document.querySelector('.error')
        inputs.forEach(function(input){
            if(!input.value && !textArea.value){
                input.style.outline ="1px solid #f00";
                textArea.style.outline ="1px solid #f00";
                errorMsg.classList.remove('hide');
                errorMsg.style.color = "#f00";
                  
            }
        }) 
             
        }
          
function Contact(){
    return(
        <section id="contact">
        <div className="input-container">
          <h1 className="contact-head">Contact Me</h1>
          <div className="input-section">
            <input
              type="text"
              name=""
              id=""
              className="half-width"
              placeholder="Name"
            />
            <input
              type="email"
              name=""
              id=""
              className="half-width"
              placeholder="Email"
            />
            <input
              type="text"
              name=""
              id=""
              className="full-width"
              placeholder="Subject"
            />
            <textarea placeholder="Message"></textarea>
            <button className="send-msg" onClick={contactValidation}>Send Message</button>
          </div>
          <p className="error hide">Fields cannot be empty!</p>
        </div>
      </section>
    )
}

export default Contact;