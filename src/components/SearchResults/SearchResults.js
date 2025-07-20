import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from "../Tracklist/Tracklist";

function SearchResults() {
    const trackList = [
        {
            name: 'Blinding Lights',
            artist: 'The Weeknd',
            album: 'After Hours',
            id: '1'
        },
        {
            name: 'Levitating',
            artist: 'Dua Lipa',
            album: 'Future Nostalgia',
            id: '2'
        },
        {
            name: 'As It Was',
            artist: 'Harry Styles',
            album: 'Harry’s House',
            id: '3'
        },
        {
            name: 'Save Your Tears',
            artist: 'The Weeknd',
            album: 'After Hours',
            id: '4'
        },
        {
            name: 'Watermelon Sugar',
            artist: 'Harry Styles',
            album: 'Fine Line',
            id: '5'
        },
        {
            name: 'Don’t Start Now',
            artist: 'Dua Lipa',
            album: 'Future Nostalgia',
            id: '6'
        }
    ];

    return (
        <div className={styles.Tracklist}>
            <Tracklist tracks={trackList} />
        </div>
    )
}

export default SearchResults;
