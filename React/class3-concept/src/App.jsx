import React from 'react'
import Card from './components/Card'

const App = () => {

   const users = ['mohit', 'Anubhav', 'Radha']

  return (
    <div>
      {users.map(function(elem){
       return <Card user={elem}/>
      })}
    </div>
  )
}

export default App
