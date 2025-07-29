import React, {useEffect, useState} from 'react';
import {getUserPlaylist, getUserProfile, getPlaylistTracks} from "../../api/spotify";
import playlist from "../Playlist/Playlist";

function PlaylistList(props) {

    const [playlistList, setPlaylistList] = useState([]);
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await getUserProfile()
                const playlists = await getUserPlaylist(user.id)
                setPlaylistList(playlists.map((playlist) => {
                    return {
                        name: playlist.name,
                        tracks: playlist.tracks,
                        id: playlist.id,
                    }
                }))
            } catch (error) {
                console.error(error);
            }
        };
        fetchData().catch((err) => {
            console.error(err);
        });
    }, [])

    useEffect(() => {
        console.log('Playlist aggiornate:', playlistList);
    }, [playlistList]);

    async function retrieveTracks(e) {
        try {
            const tracks = await getPlaylistTracks(e.currentTarget.id)
            console.log('tracks', tracks)
            setTracks(tracks.map(({track}) => {
                return {
                    name: track.name,
                    album: track.album.name,
                    artist: track.artists.map(a => a.name).join(', '),
                    id: track.id
                }
            }))
        } catch (error) {
            console.error(error);
        }
    }

    console.log(tracks);

    return (
        <ul>
            {playlistList.map((playlist) => {
                return (
                    <div style={{border: '2px solid darkviolet', borderRadius: '1rem', margin: '1rem', padding: '1rem'}}>
                        <h1 id={playlist.id} onClick={retrieveTracks}>{playlist.name}</h1>
                    </div>
                )
            })}
        </ul>
    )
}

export default PlaylistList;