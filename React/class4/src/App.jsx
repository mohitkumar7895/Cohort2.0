import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar title='sheriyans' links={['Home', 'About', 'Account']} />
      <Navbar title='heriyans' links={['Home', 'Services', 'Account']} />
      <Navbar title='ans' links={['Home', 'Product', 'Account','pro']} />
    </div>
  )
}

export default App
