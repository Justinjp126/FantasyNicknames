import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Nickname from './components/Nickname'
import NicknamePage from './components/NicknamePage'
import Player from './components/Player'
import Search from './components/Search'
import MainPage from './pages/MainPage'
import fantasyNicknames from "./fantasy-nicknames.json"
import C_KuppPage from "./pages/C_KuppPage"
import './css/styles.min.css'

function App() {
  return (
    <div className="App">
      {/* <Nickname />
      <MainPage /> */}
      <C_KuppPage />
    </div>
  )
}

export default App
