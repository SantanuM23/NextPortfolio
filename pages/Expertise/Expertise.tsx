import React from 'react'
import './Expertise.css'
import AIML from './AIML';
import Artist from './ArtistData';
import Gamedev from './GDeveloperData';
import Pythondev from './Python';
import Others from './others';


const Expertise = () => {

  return (
    <div className='section-expertise'>
      <div className='content-expertise'>
        <h1 className='p-8 text-6xl bg-my-gradient bg-clip-text text-transparent'>My Expertise</h1>
        <div>
          <center>
          <Artist/>
          <Gamedev/>
          <Pythondev/>
          <AIML/>
          <Others/>
          </center>
        </div>
      </div>
    </div>
  )
}

export default Expertise