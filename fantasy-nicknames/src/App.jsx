import { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Nickname from './components/Nickname'
import NicknamePage from './components/NicknamePage'
import Player from './components/Player'
import Search from './components/Search'
import MainPage from './pages/MainPage'
import ErrorPage from './pages/ErrorPage'
import fantasyNicknames from "./fantasy-nicknames.json"
import C_KuppPage from "./pages/C_KuppPage"
import {   createBrowserRouter,
  RouterProvider,
  Route } from "react-router-dom"
import './css/styles.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
]);

function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
