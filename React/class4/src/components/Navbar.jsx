import React from 'react'

const Navbar = (props) => {



  return (
    <div className="bg-emerald-500 text-white px-6 py-3 flex justify-between items-center mb-1">
      
      {/* Logo / Title */}
      <h1 className="text-xl font-semibold">
        {props.title}
      </h1>

      {/* Menu */}
      <ul className="flex gap-6 text-sm mb -1">
       {props.links.map(function(elem){
        return <h4>{elem}</h4>
       })}
      </ul>

    </div>
  )
}

export default Navbar
