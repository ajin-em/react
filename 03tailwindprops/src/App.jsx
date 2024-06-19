import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-amber-600 p-3 rounded-md'>vite with tailwind</h1>
      <Card username = 'Ajin' post = 'Web Developer'/>
      <Card></Card>
    </>
  )
}

export default App
