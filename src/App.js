import React, {useEffect} from "react";
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar.js";
import Playlist from "./components/Playlist/Playlist.js";
import {useState} from "react";
import { isLoggedIn, logout } from './auth/auth';
import LoginButton from './components//LoginButton/LoginButton.js';
import { handleRedirectCallback } from './auth/callback';
import SearchResults from "./components/SearchResults/SearchResults";
import PlaylistList from "./components/PlaylistList/PlaylistList";

function App() {

    useEffect(() => {
        if (window.location.pathname === '/callback') {
            handleRedirectCallback();
        }
    }, []);

    const [playlists, setPlaylists] = useState([]);

    function addToPlaylist(track) {
        setPlaylistTracks(prevTracks => {
            // Evita duplicati
            if (prevTracks.some(t => t.id === track.id)) return prevTracks;
            return [...prevTracks, track];
        });
    }

    const removeFromPlaylist = (trackToRemove) => {
        setPlaylistTracks(prev => prev.filter(track => track.id !== trackToRemove.id));
    };

    if (!isLoggedIn()) {
        return (
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <h2>Benvenuto su Jammming</h2>
                <LoginButton />
            </div>
        );
    }

    const [searchResults, setSearchResults] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [selectedPlaylistName, setSelectedPlaylistName] = useState('');

    function handleTracksSelected(tracks, name) {
        setPlaylistTracks(tracks);
        setSelectedPlaylistName(name);
    }

  return (
    <div className="App">
        <header>
            <h1 style={{backgroundColor: 'darkviolet', color: 'violet', fontSize: '6rem', textAlign: 'center', marginTop: 0}}>Jammming</h1>
            <button style={{backgroundColor: 'darkviolet', color: 'violet', fontSize: '2rem', textAlign: 'center', marginTop: 0, cursor: 'pointer'}} type="button" onClick={logout}>Logout</button>
        </header>
        <main>
            <SearchBar onSearchResults={setSearchResults} />
            <div className="columns">
                <SearchResults onAction={addToPlaylist} filteredTracks={searchResults} />
                {playlistTracks.length === 0 ? (
                    <PlaylistList onTracksSelected={handleTracksSelected}/>
                ) : (
                    <Playlist tracks={playlistTracks} onAction={removeFromPlaylist} playlistName={selectedPlaylistName}/>
                )}
            </div>
        </main>
    </div>
  );
}

export default App;
