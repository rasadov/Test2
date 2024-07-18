import { useState } from 'react'
import './App.css'

import HeaderBackground from './components/headers.jsx'
import {About , Steps} from './components/body.jsx'
import Players from './components/players.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <>
      <HeaderBackground />
      <About />
      <Steps />
      <Players />
      <Footer />
    </>
  )
}

export default App
