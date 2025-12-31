import React, { useState } from 'react'
import axios from 'axios'
import './index.css'
import User from './components/User'

const App = () => {

  const [allData, setAllData] = useState([])

  async function getData() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setAllData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div className="all-cards">
        {allData.map((elem, idx) => (
          <div key={idx}>
            <User elem={elem} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
