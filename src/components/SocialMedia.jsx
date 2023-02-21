import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { SlSocialLinkedin } from 'react-icons/sl';


function SocialMedia() {
  return (
    <div className="app__social">
        <div>
            <a 
              href="https://github.com/Lucas-De-Lima" 
              target="_blank" 
              rel="noopener noreferrer">
                <AiFillGithub />
            </a>
        </div>
        <div>
            <a 
              href="https://www.linkedin.com/in/dev-lucasdelima/" 
              target="_blank" 
              rel="noopener noreferrer">
                <SlSocialLinkedin />
            </a>
        </div>
        <div>
            <a 
              href="https://www.facebook.com/profile.php?id=100089004522410" 
              target="_blank" 
              rel="noopener noreferrer">
                <FaFacebookF /> 
            </a>
        </div>
        <div>
            <a 
              href="https://www.instagram.com/dev.lucasdelima/"      
              target="_blank" 
              rel="noopener noreferrer">
                <BsInstagram />
            </a>
        </div>
    </div>
  )
};

export default SocialMedia;
