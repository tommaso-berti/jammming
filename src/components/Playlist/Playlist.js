import React, {useState} from 'react';
import styles from './Playlist.module.css';
import TrackList from '../Tracklist/Tracklist.js'

function Playlist({tracks, onAction}) {

    const [playlistName, setPlaylistName] = useState('')
    const [playlistsList, setPlaylistsList] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!playlistName.trim()) return;
        const newPlaylist = {
            playlistName,
            tracksId: tracks.map(track => track.id)
        };
        setPlaylistsList(prev => [...prev, newPlaylist]);
        setPlaylistName('');
    };

    console.log(playlistsList)

    return (
        <div className={styles.playlistContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="playlist-Name" className={styles.srOnly}>Search</label>
                <input
                    type="text"
                    name="playlist-Name"
                    id="playlist-Name"
                    placeholder="Add playlist title here"
                    autoComplete='off'
                    value={playlistName}
                    onChange={(event) => setPlaylistName(event.target.value)}
                />
                <TrackList tracks={tracks} onAction={onAction} actionLabel='-'/>
                <input type="submit" value="Add playlist" className={styles.submit} />
            </form>
        </div>
    )
}

export default Playlist;