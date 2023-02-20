import Header from './components/Header'
import Footer from './components/Footer'
import background from './assets/coding.png'


function App() {
  

  return (
    <div style={{ backgroundImage: `url(${background})`, height: '868px' }}>
    <Header />
    <Footer/>
  </div>
  );
}

export default App;
