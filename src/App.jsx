import { useEffect, useState } from 'react'
import './index.css'
import AboutMe from './Pages/AboutMe'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Certificates from './Pages/Certificates'
import ContactMe from './Pages/ContactMe'
import {BounceLoader} from 'react-spinners';

function App() {
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    }, []);

  return (
    <>
    <div
      className="w-full min-h-screen"
      style={{
        background: 'radial-gradient(circle farthest-corner at -24.7% -47.3%, rgba(6,130,165,1) 0%, rgba(34,48,86,1) 66.8%, rgba(15,23,42,1) 100.2%)'
      }}
    > {loading ? (
      <div className="h-screen flex flex-col justify-center items-center"> 
        <BounceLoader color="#3dcfff" />
        <p className="text-2xl text-white font-bold mt-5">Loading</p>
      </div>
    ) : (
      <div>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Certificates/>
        <ContactMe/>
      </div>
    )}
</div>

    
    
    </>
  )
}

export default App
