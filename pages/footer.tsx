import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <div className='section-footer'>
            <hr></hr>
            <p className='flex justify-center p-5'>Copyright © 2023 - {year} | Created by&nbsp;<span className='bg-my-gradient bg-clip-text text-transparent'>Santanu Mondal</span></p>
    </div>
  )
}

export default Footer