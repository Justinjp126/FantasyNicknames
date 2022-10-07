import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Test from './components/Test.jsx'

import './css/styles.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Test />
    </div>
  )
}

export default App
