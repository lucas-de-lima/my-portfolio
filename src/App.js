import React from 'react';

import { Aboult, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';
import './App.scss';

function App() {
  return (
 <div className='app'>
    <Navbar />
    <Header />
    <Aboult />
    <Work />
    <Skills />
    <Testimonials />
    <Footer />
 </div>
    )
}

export default App;
