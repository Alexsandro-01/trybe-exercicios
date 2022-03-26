import './App.css';
import React from 'react';
import InputList from './InputList';
import List from './List';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <InputList />
        <List />
      </div>
    );
  }
}

export default App;
