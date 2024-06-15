import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const addValue = () =>{
    setCounter((prevCounter) => prevCounter + 1)
  }
  const removeValue = () =>{
    if (counter > 0){
    setCounter((prevCounter) => prevCounter - 1)
    }
  }

  return (
    <>
    <h1>React Counter</h1>
    <h2>counter value :{counter} </h2>
    <button onClick={addValue}>add value</button>
    <button onClick={removeValue}>remove value</button>
    <p>footer</p>
    </>
  )
}

export default App
