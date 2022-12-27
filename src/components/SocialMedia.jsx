import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className="app__social">
        <div>
            <a 
              href="https://twitter.com/LucasDeLima___" 
              target="_blank" 
              rel="noopener noreferrer">
                <BsTwitter />
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
