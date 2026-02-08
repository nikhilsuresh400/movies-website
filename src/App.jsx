import React from 'react'
import Navbar from './components/Navbar'
import MovieContent from './components/MovieContent'

const App = () => {
  return (
    <div className='min-h-screen text-primaryText-dark text-sm'>
      <Navbar />
      <main>
        <MovieContent />
      </main>
    </div>
  )
}

export default App
