import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from "../Tracklist/Tracklist";
import {trackList} from "../Tracklist/tracklist-sample.js";

function SearchResults() {

    return (
        <div className={styles.Tracklist}>
            <Tracklist tracks={trackList} />
        </div>
    )
}

export default SearchResults;
