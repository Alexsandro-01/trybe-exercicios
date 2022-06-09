import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const pending = ['Cortar cabelo', 'Lavar louça', 'Aprender React'];

function App() {
  return (
    <ul>
      { pending.map((value) => task(value))}
    </ul>
  );
}

export default App;
