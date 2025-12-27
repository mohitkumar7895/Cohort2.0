import React, { useState } from 'react'

const App = () => {

   const [username, setusername] = useState('')

   const [allUsers, setAllUsers] = useState([])

 const submitHandler = (e)=>{
      e.preventDefault()
      
      const newAllUsers = [...allUsers]
      newAllUsers.push(username)

      console.log(newAllUsers);

       setAllUsers(newAllUsers)

      setusername('')
 }



  return (
    <div>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' value={username} onChange={(e)=> {
              setusername(e.target.value)
        }}/>
        <button>Submit</button>
      </form>

      {allUsers.map((elem)=>{
          return  <h1>{elem}</h1>
      })}
    </div>
  )
}

export default App
