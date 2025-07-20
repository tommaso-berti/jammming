import React from 'react';
import style from './Tracklist.module.css';
import Track from '../Track/Track.js'

function Tracklist(props) {
    const tracks = props.tracks;

    if (!tracks || tracks.length === 0) {
        return null; // Non renderizza nulla
    }

    return (
        <ul>
            {tracks.map((track) => {
                return (<Track track={track} key={track.id} />)
            })}
        </ul>
    )
}

export default Tracklist;