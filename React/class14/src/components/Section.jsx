import React, { useContext } from 'react'
import { NavbarDataContext } from '../context/NavbarContext'

const Section = () => {

 const data = useContext(NavbarDataContext)
 console.log(data)

  return (
    <div className='h-90 bg-zinc-900'>
      <h1 className='text-xl'>Section</h1>
    </div>
  )
}

export default Section
