/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
  { title: 'Web Development', description: 'I am good web Developer.', imgUrl: images.about01},
  { title: 'Front-end Development', description: 'I am good Front-end Developer.', imgUrl: images.about02},
  { title: 'Back-end Development', description: 'I am good Back-end Developer.', imgUrl: images.about03},
];

function About() {
  return (
    <>
    <div>
      <h2 className="head-text">I Know that <span>Good Development</span> <br/> means <span>Good Business</span></h2>

      <div className="app__profiles" />
        {abouts.map( (about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ) )}
      </div>
    </>
  )
}

export default About;
