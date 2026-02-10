import React from 'react'
import Navbar from './components/Navbar'
import MovieContent from './components/MovieContent'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div className='min-h-screen text-primaryText-dark text-sm'>
      <Navbar />
              <main>
                <MovieContent />
              </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
