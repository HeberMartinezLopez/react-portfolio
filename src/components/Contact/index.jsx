import React, { useState } from 'react';
import './contact.css';

const Contact = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // form data to be sent to backend to handle email sending
        console.log('Form submitted:', { name, phone, email, message });
    };

    return (
        <div className='contact-container'>
            <section className='contact-message'>
                <h2> Contact Me</h2>
                <p> Send me a message and I'll get back to you ASAP</p>
            </section>

            <form onSubmit={handleSubmit} className='contact-form'>
                <div className='input'>
                    <label>Name:</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className='input'>
                    <label>Phone:</label>
                    <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                </div>
                <div className='input'>
                    <label>Email:</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className='input'>
                    <label>Message:</label>
                    <textarea value={email} onChange={(e) => setMessage(e.target.value)} required/>
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact;