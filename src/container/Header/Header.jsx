/* eslint-disable react/no-array-index-key */
import React from 'react'
import { motion } from 'framer-motion';

import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}


function Header() {
  return (
    <div id="home" className='app__header app__flex'>
      <motion.div 
        whileInView={ { x: [-100, 0], opacity: [0, 1] } }
        transition={{ duration: 0.5 }}
        className='app__header-info'
       >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20 }}>
              <p className='p-text'>Olá, Eu sou</p>
              <h1 className='head-text'>Lucas</h1>
            </div>
          </div>

          <div>
          <p className='p-text'>Desenvolvimento Web</p>
          <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={ { opacity: [0, 1] } }
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={ { scale: [0, 1] } }
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className='overlay_circle'
        />   
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="circle" />
        </div>
        ))}
      </motion.div>

    </div>
  )
}

export default Header;
