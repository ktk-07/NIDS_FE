import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./components/Calculator.jsx"
import Calculator from './components/Calculator.jsx'
// import '/style/App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div class="w-screen h-screen">
        <Calculator></Calculator>
      </div>
    </>
  )
}

export default App
