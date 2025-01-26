import React, { useState } from 'react';
import './App.css'
import Basic from './components/Basic';
import SkyBlue from './components/skyBlue';
import Colorful from './components/colorful';
import Desert from './components/desert';
import Minimal from './components/minimal';
import Ocean from './components/ocean';
function App() {

  return (
    <>
      <div className='flex gap-2'>
          <Basic/>
          <SkyBlue/>
          <Ocean/>
          <Colorful/>
          <Desert/>
          <Minimal/>
        </div>
    </>
  )
}

export default App
