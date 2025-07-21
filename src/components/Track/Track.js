import React from "react";
import styles from './Track.module.css';

function Track({track, onAction, actionLabel}) {

    return (
        <li>
            <h1>{track.name}</h1>
            <h2>{track.album}</h2>
            <h3>{track.artist}</h3>
            <button type="button" className={styles.plusButton} onClick={() => onAction(track)}>{actionLabel}</button>
        </li>
    )
}

export default Track;