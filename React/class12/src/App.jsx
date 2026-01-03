import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'

const App = () => {
  return (
    <div>
     <Navbar />

     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>} />
     </Routes>
    </div>
  )
}

export default App
