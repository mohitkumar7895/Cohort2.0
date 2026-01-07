import React from 'react'
import Navbar from './components/Navbar'
import AllSection from './components/AllSection'
import Footer from './components/Footer'

const App = () => {

  const courseData = {
    courseName: "React JS",
    duration: "3 months",
    level: "Beginner to Advanced"

  }


  return (
    <div>
      <Navbar />
      <AllSection courseData={courseData} />
      <Footer />
    </div>
  )
}

export default App
