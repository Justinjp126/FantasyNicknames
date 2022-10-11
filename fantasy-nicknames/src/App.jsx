import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Nickname from './components/Nickname'
import NicknamePage from './components/NicknamePage'
import Player from './components/Player'
import Search from './components/Search'
import MainPage from './components/MainPage'
import fantasyNicknames from "./fantasy-nicknames.json"
import './css/styles.min.css'

function App() {
  return (
    <div className="App">
      <Nickname />
      <MainPage />
    </div>
  )
}

export default App
