import './App.css';
import Footer from './Components/Footer';
import Pokedex from './Components/Pokedex';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokedex</h1>
      </header>
     <Pokedex />
     <Footer />
    </div>
  );
}

export default App;
