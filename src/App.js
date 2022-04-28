import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <>
      <h1>welcome to the scribblr</h1>
      <form>
        <label htmlFor='userName'>enter username here</label>
        <input type="text"></input>
      </form>
      <Board />
    </>
  );
}

export default App;
