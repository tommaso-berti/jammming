import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar.js";
import Playlist from "./components/Playlist/Playlist.js";
import Tracklist from "./components/Tracklist/Tracklist.js";
import {useState} from "react";
import {trackList} from "./dataSamples/tracklist-sample";


function App() {

    const [playlists, setPlaylists] = useState([]);
    const addToPlaylist = (track) => {
        setPlaylists(prev => [...prev, track]);
    }
    const removeFromPlaylist = (trackToRemove) => {
        setPlaylists(prev => prev.filter(track => track.id !== trackToRemove.id));
    };

  return (
    <div className="App">
        <header>
            <h1 style={{backgroundColor: 'darkviolet', color: 'violet', fontSize: '6rem', textAlign: 'center', marginTop: 0}}>Jammming</h1>
        </header>
        <main>
            <SearchBar />
            <div className="columns">
                <Tracklist onAction={addToPlaylist} tracks={trackList} />
                <Playlist  tracks={playlists} onAction={removeFromPlaylist} />
            </div>
        </main>
    </div>
  );
}

export default App;
