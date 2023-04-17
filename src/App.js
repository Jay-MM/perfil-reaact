import Header from './components/Header'
import Footer from './components/Footer'
import background from './assets/coding.jpg'


function App() {
  

  return (
    <div style={{ backgroundImage: `url(${background})`, height: "100%" }}>
    <Header />
    <Footer/>
  </div>
  );
}

export default App;
