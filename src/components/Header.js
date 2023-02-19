import { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import About from './About'
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
          marginLeft: 12,
          marginTop: 33,
          marginBottom:33 }} 
        >
        {renderPage()}
      </main>
    <Footer />
  </>
  );
}

export default Header