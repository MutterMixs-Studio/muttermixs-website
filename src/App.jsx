import React from 'react'
import { useEffect, useState } from 'react'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import Header from './components/Header.jsx'

function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <AnimatedBackground mousePosition={mousePosition} />
        <Header />

      </div>

    </>
  )
}

export default App
