import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '444px', 
      marginTop: 33
    }}>
      <Header/>
      </div>
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

export default App;
