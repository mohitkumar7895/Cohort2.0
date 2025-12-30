import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [allData, setAllData] = useState([])

 async function getData(){
  
 const response = await axios.get("https://jsonplaceholder.typicode.com/users")

  setAllData(response.data)
 }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

       {allData.map(function(elem,idx){
        return <h1 key={idx}>{elem.name}</h1>
                      
       })}
    </div>
  )
}

export default App
