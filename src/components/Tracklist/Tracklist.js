import React from 'react';
import style from './Tracklist.module.css';
import Track from '../Track/Track.js'
import {trackList} from "./tracklist-sample.js";

function Tracklist(props) {
    let tracksToShow = props.tracks || [];
    if (tracksToShow.length === 0) {
        tracksToShow = trackList
    }

    return (
        <ul>
            {tracksToShow.map((track) => {
                return (<Track track={track} key={track.id} />)
            })}
        </ul>
    )
}

export default Tracklist;