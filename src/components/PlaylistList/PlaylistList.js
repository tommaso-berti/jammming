import React, {useEffect, useState} from 'react';
import {getUserPlaylist, getUserProfile, getPlaylistTracks} from "../../api/spotify";

function PlaylistList({onTracksSelected}) {

    const [playlistList, setPlaylistList] = useState([]);

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

    async function retrieveTracks(playlistId, playlistName) {
        try {
            const tracks = await getPlaylistTracks(playlistId)
            onTracksSelected(
                tracks.map(({track}) => ({
                        name: track.name,
                        album: track.album.name,
                        artist: track.artists.map(a => a.name).join(', '),
                        id: track.id
            })), playlistName
        );
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <ul>
                {playlistList.map(playlist => (
                    <li key={playlist.id}>
                        <button onClick={() => retrieveTracks(playlist.id, playlist.name)}>
                            {playlist.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlaylistList;