import React, {useState} from 'react';
import styles from './Playlist.module.css';
import TrackList from '../Tracklist/Tracklist.js'

function Playlist({tracks, onAction}) {

    const [playlistName, setPlaylistName] = useState('')
    const [playlistsList, setPlaylistsList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!playlistName.trim()) return;
        if (tracks.length === 0) return;
        const newPlaylist = {
            playlistName,
            tracksId: tracks.map(track => track.id)
        };
        const alreadyExists = playlistsList.some(
            playlist => playlist.name === newPlaylist.name
        );
        if(!alreadyExists) {
            setPlaylistsList(prev => [...prev, newPlaylist]);
        }
        else {
            setPlaylistsList(prev => {
                const updated = [...prev];
                updated[0].playlistName = playlistName;
                return updated;
            });
        }
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