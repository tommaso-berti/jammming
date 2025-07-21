import React from 'react';
import style from './Tracklist.module.css';
import Track from '../Track/Track.js'

function Tracklist({tracks = [], onAction, actionLabel}) {

    return (
        <ul>
            {tracks.map((track) =>
                <Track track={track} key={track.id} onAction={onAction} actionLabel={actionLabel || '+'} />
            )}
        </ul>
    )
}

export default Tracklist;