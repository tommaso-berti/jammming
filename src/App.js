import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar.js";
import Playlist from "./components/Playlist/Playlist.js";

function App() {
  return (
    <div className="App">
        <header>
            <h1 style={{backgroundColor: 'darkviolet', color: 'violet', fontSize: '6rem', textAlign: 'center', marginTop: 0}}>Jammming</h1>
        </header>
        <main>
            <SearchBar />
            <Playlist />
        </main>
    </div>
  );
}

export default App;
