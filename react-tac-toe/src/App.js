import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Player from './components/Player';

function App() {
  return (
    <div>
      <Header />
      <Player whichPlayer='X'/>
      <Player whichPlayer='O'/>
      <Board />
    </div>
  );
}

export default App;
