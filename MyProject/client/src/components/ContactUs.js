import React from 'react';
import './contact.css';
import 'font-awesome/css/font-awesome.min.css';




const ContactUs = () => {
  return (
    <div className='contactUsContainer'>
      <div className="ContactForm">
        <div className='headingText'>Contact Us</div>
        <div className="contacttext"> You can E-mail us on <i className="fa fa-arrow-down" aria-hidden="true" /> </div> 
        {/* <i className="fa fa-spinner fa-spin" /> */}
       <div className="icon">
       <a href="mailto:shourabhji12@gmail.com ">
       <i className="fa fa-envelope" aria-hidden="true" />
       </a>
        </div>
      </div>
      <div className="contactFooter"> 
     <a href="https://www.linkedin.com/in/kameshwar-pandey-b04987227">
     <i className="fa fa-linkedin" aria-hidden="true" />
     </a>
     <a  href="https://www.instagram.com/shourabhji/?hl=en">
     <i className="fa fa-instagram" aria-hidden="true" />
     </a> 
     <a href="https://github.com/shourabhji">
      <i className="fa fa-github" aria-hidden="true" />
      </a>
      </div>
    </div>
  )
}

export default ContactUs
