import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from "../Tracklist/Tracklist";


function SearchResults({onAction, filteredTracks}) {
    return (
        <div>
            <Tracklist onAction={onAction} tracks={filteredTracks} />
        </div>
    )
}

export default SearchResults;
