import React, {useState, useEffect} from 'react';
import styles from './Playlist.module.css';
import TrackList from '../Tracklist/Tracklist.js'
import {createPlaylist, getUserProfile, addTracksToPlaylist} from "../../api/spotify.js";

function Playlist({tracks, onAction, playlistName}) {

    const [playlist, setPlaylist] = useState(null);
    const [name, setName] = useState(playlistName || '');

    useEffect(() => {
        setName(playlistName || '');
    }, [playlistName]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        if (tracks.length === 0) return;

        const newTracksId = tracks.map(track => track.id);

        setPlaylist(prev => {
            if (prev && prev.playlistName === name) {
                return {
                    ...prev,
                    tracksId: newTracksId
                };
            } else {
                return {
                    playlistName: name,
                    tracksId: newTracksId
                };
            }
        });
        alert('Playlist created successfully')
    };

    async function handleSaveToSpotify(){
        const user = await getUserProfile()
        if(playlist) {
            const newPlaylist = await createPlaylist(user.id, playlistName)
            const trackUris = playlist.tracksId.map(id => `spotify:track:${id}`);
            try {
                await addTracksToPlaylist(newPlaylist.id, trackUris)
                alert('Playlist saved to account')
            }
            catch(e) {
                console.error(e)
            }
        }
        else
            alert('Playlist not yet created')
    }

    return (
        <div className={styles.playlistContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="playlist-Name" className={styles.srOnly}>Search</label>
                <input
                    type="text"
                    name="playlist-Name"
                    id="playlist-Name"
                    placeholder="Add new playlist title here"
                    autoComplete='off'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TrackList tracks={tracks} onAction={onAction} actionLabel='-'/>
                <input type="submit" value='Add playlist' className={styles.submit}/>
                <input type="button" value='Save to account' className={styles.submit} onClick={handleSaveToSpotify}/>
            </form>
        </div>
    )
}

export default Playlist;