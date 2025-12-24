import React from 'react'
import { useState } from 'react';

const App = () => {

  const [user, setUser] = useState('mohit')
  const [num, setNum] = useState(0)
  const btnClicked = () =>{
   setUser('bixi');
  }


  return (
    <div>
      <h1>{num}</h1>
      <h1>{user}</h1>
      <button onClick={btnClicked}>Change User</button>
      
      <button onClick={()=>{
        setNum(num+1)
      }}>Change it</button>

       <button onClick={()=>{
        setNum(num-1)
      }}>Change it</button>
    </div>
  
  )
}

export default App
