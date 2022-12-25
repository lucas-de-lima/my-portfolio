/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import React from 'react';

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map( (item, index )=> (
        <a 
         href={`#${item}`}
         key={item + index}
         className="app__navigation-dot" 
         style={active === item ? { backgroundColor: '#313BAC' } : { }}
        />
      ))};
    </div>
  )
};

NavigationDots.propTypes = {}.isRequired;

export default NavigationDots;
