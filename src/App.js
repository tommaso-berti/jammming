import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar.js";
import Playlist from "./components/Playlist/Playlist.js";
import Tracklist from "./components/Tracklist/Tracklist.js";

function App() {
  return (
    <div className="App">
        <header>
            <h1 style={{backgroundColor: 'darkviolet', color: 'violet', fontSize: '6rem', textAlign: 'center', marginTop: 0}}>Jammming</h1>
        </header>
        <main>
            <SearchBar />
            <div className="columns">
                <Tracklist />
                <Playlist />
            </div>
        </main>
    </div>
  );
}

export default App;
