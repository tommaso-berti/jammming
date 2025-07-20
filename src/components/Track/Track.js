import React from "react";
import styles from './Track.module.css';

function Track(props) {
    const name = props.track.name;
    const artist = props.track.artist;
    const album  = props.track.album;
    const id = props.track.id;

    return (
        <li>
            <h1>{name}</h1>
            <h2>{album}</h2>
            <h3>{artist}</h3>
        </li>
    )
}

export default Track;