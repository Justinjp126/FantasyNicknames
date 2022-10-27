import { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Nickname from './components/Nickname'
import Player from './components/Player'
import Search from './components/Search'
import MainPage from './pages/MainPage'
import NicknamePage from './pages/NicknamePage'
import ErrorPage from './pages/ErrorPage'
import fantasyNicknames from "./fantasy-nicknames.json"
import { getDatabase, ref, onValue, get} from "firebase/database";

import { 
  createBrowserRouter,
  RouterProvider,
  Route } from "react-router-dom"

  import './css/styles.min.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/player/',
    element: <NicknamePage />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
