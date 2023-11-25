import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <section>
            <p>Heber Martinez Lopez</p>            
        </section>
        <section className='footer-socials'>
            <h4>Social Media</h4>
            <div className='icon-container'>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
        <i className="fa fa-instagram"></i>
      </a>
      <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
        <i className="fa fa-facebook"></i>
      </a>
      <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
        <i className="fa fa-youtube"></i>
      </a>
            </div>
        </section>
      
    </div>
  )
}

export default Footer