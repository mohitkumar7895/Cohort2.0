import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white border-2 border-red-500 m-2 rounded h-40 px-5 py-3 w-40r'>
      <h1 className='text-2xl font-semibold'>{props.user}</h1>
    </div>
  )
}

export default Card
