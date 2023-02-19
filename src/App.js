import Header from './components/Header'
import Nav from './components/Nav'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header>
      <Nav />
    </Header>
    <main>
      <Project />
    </main>
    <Footer />
    </>
  );
}

export default App;
