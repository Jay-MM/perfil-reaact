import { useState } from 'react'
import Nav from './Nav'
import About from './About/About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Resume from './Resume'

function Header() {
  const [currentPage, setCurrentPage] = useState(['About'])
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    } else if (currentPage === 'Contact') {
      return <Contact />
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />
    } else if (currentPage === 'Resume') {
      return <Resume />
    } 
    return <About />
  }


  return (
    <>
      <Nav 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      <main
        style={{
          display: 'flex',
          paddingBottom: '42px',
          paddingTop: '42px'
        }}
        >
        {renderPage()}
      </main>
  </>
  );
}

export default Header