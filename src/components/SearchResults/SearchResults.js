import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from "../Tracklist/Tracklist";
import {trackList} from "../Tracklist/tracklist-sample.js";

function SearchResults() {
    const filteredTrackList = []
    return (
        <div className={styles.content}>
            <Tracklist tracks={filteredTrackList} />
        </div>
    )
}

export default SearchResults;
