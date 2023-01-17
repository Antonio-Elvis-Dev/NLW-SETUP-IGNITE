import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Habit } from './components/Habit'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Habit completed={3}/>
      <Habit completed={3}/>
      <Habit completed={10}/>
    </div>
  )
}

export default App
