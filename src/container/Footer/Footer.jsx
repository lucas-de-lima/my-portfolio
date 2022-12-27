/* eslint-disable no-useless-escape */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
import React, { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';


function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  };

  const validateEmail = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    
    if( name === '' || email === '' || message === '') {
      setLoading(false);
      toast.error("All fields are required and cannot be blank", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
    
    else if (validateEmail()) {
      setLoading(true);
  
      const contact = {
        _type: 'contact',
        name,
        email,
        message,
      }

      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
          toast.success("Obrigado por entrar em contato!", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        })
    }
    else {
      toast.error("Enter a valid email address!", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  };

  return (
    <>
      <h2 className="head-text">Pegue seu café & fale comigo!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@lucas.com" className="p-text">hello@lucas.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +55 (15) 99999-9999" className="p-text">+55 (15) 99999-9999</a>
        </div>
      </div>

      {!isFormSubmitted ?
        <> 
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Seu Nome" name="name" value={name} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Seu Email" name="email" value={email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea 
              className="p-text"
              placeholder="Sua Mensagem"
              value={message}
              name="message"
              onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Enviar' : 'Enviar Mensagem'}</button>
          </div>
          <ToastContainer />
        </>
      :  
        <>
          <div>
            <h3 className="head-text">Obrigado por entrar em contato!</h3>
          </div>
          <ToastContainer />
        </>  
      }
    </>
  )
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
   'contact',
   "app__whitebg"
  );
