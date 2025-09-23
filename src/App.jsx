import { useState } from 'react'
import './index.css'
import AboutMe from './Pages/AboutMe'
import Skills from './Pages/Skills'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div
  className="w-full min-h-screen"
  style={{
    background: 'radial-gradient(circle farthest-corner at -24.7% -47.3%, rgba(6,130,165,1) 0%, rgba(34,48,86,1) 66.8%, rgba(15,23,42,1) 100.2%)'
  }}
>
  <AboutMe/>
  <Skills/>
</div>

    
    
    </>
  )
}

export default App
