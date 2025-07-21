import React from 'react';
import styles from './Playlist.module.css';
import TrackList from '../Tracklist/Tracklist.js'

function Playlist(props) {
    const addedTracks = [    { name: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', id: '1' },
        { name: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', id: '2' },
        { name: 'As It Was', artist: 'Harry Styles', album: 'Harry’s House', id: '3' },]

    const [playlist, setPlaylist] = React.useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Playlist added!');
    }

    return (
        <div className={styles.playlistContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="search-box" className={styles.srOnly}>Search</label>
                <input
                    type="text"
                    name="search-box"
                    id="search-box"
                    placeholder="Add playlist title here"
                    className={styles}
                    autoComplete='off'
                />
                <TrackList tracks={addedTracks} />
                <input type="submit" value="Add playlist" className={styles.submit} />
            </form>
        </div>
    )
}

export default Playlist;