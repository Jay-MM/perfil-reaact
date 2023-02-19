import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Page from './components/Page'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App() {
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
      <br />
    <Header />
    <main>
      {renderPage()}
    </main>
    <Footer />
    </>
  );
}

export default App;
