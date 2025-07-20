import React from 'react';
import styles from './Playlist.module.css';
import TrackList from '../Tracklist/Tracklist.js'
import {trackList} from "../Tracklist/tracklist-sample.js";

function Playlist(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Playlist added!');
    }

    return (
        <>
            <div className={styles.container}>
                <TrackList />
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="submit" value="Add playlist" className={styles.submit} />
            </form>
        </>
    )
}

export default Playlist;