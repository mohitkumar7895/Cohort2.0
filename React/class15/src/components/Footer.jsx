import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Footer = () => {

    const data = useContext(ThemeDataContext);
  return (
    <div className='footer'>
      <h1>Footer</h1>
      <h2>{data}</h2>
    </div>
  )
}

export default Footer
