import React, {useEffect} from "react";
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar.js";
import Playlist from "./components/Playlist/Playlist.js";
import Tracklist from "./components/Tracklist/Tracklist.js";
import {useState} from "react";
import { isLoggedIn, logout } from './auth/auth';
import LoginButton from './components//LoginButton/LoginButton.js';
import { handleRedirectCallback } from './auth/callback';
import SearchResults from "./components/SearchResults/SearchResults";

function App() {

    useEffect(() => {
        if (window.location.pathname === '/callback') {
            handleRedirectCallback();
        }
    }, []);

    const [playlists, setPlaylists] = useState([]);
    const addToPlaylist = (track) => {
        setPlaylists(prev => [...prev, track]);
    }
    const removeFromPlaylist = (trackToRemove) => {
        setPlaylists(prev => prev.filter(track => track.id !== trackToRemove.id));
    };

    const [tracks, setTracks] = useState([]);

    if (!isLoggedIn()) {
        return (
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <h2>Benvenuto su Jammming Tommaso</h2>
                <LoginButton />
            </div>
        );
    }
  return (
    <div className="App">
        <header>
            <h1 style={{backgroundColor: 'darkviolet', color: 'violet', fontSize: '6rem', textAlign: 'center', marginTop: 0}}>Jammming</h1>
            <button style={{backgroundColor: 'darkviolet', color: 'violet', fontSize: '2rem', textAlign: 'center', marginTop: 0, cursor: 'pointer'}} type="button" onClick={logout}>Logout</button>
        </header>
        <main>
            <SearchBar onSearchResults={setTracks} />
            <div className="columns">
                <SearchResults onAction={addToPlaylist} filteredTracks={tracks} />
                <Playlist  tracks={playlists} onAction={removeFromPlaylist} />
            </div>
        </main>
    </div>
  );
}

export default App;
