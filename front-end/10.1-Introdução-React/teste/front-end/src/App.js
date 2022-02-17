import './App.css';
import img from './logo.svg';
import './Header';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Image from './Image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div> */}
        <Image source={img} alternativeText="Cute cat starting"/>
        <Header />     
        {/* </div> */}
      </header>
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
