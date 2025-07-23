import { getAccessToken } from '../auth/auth.js';

export async function getUserProfile() {
    try {
        const token = getAccessToken();
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {Authorization: `Bearer ${token}`}
        })
        if(response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }
}

export async function createPlaylist(userId, name) {
    try {
        const token = getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                public: true,
                description: 'Created with Jammming',
            })
        });
        if(response.ok) {
            return await response.json();
        }
    }
    catch (error) {
        console.error(error);
    }
}

export async function addTracksToPlaylist(playlistId, uris) {
    const token = getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uris })
    });

    if (!response.ok) {
        throw new Error('Failed to add tracks');
    }

    return await response.json();
}

export async function searchTrack(query) {
    try {
        const token = getAccessToken();
        const encodedQuery = encodeURIComponent(query);
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodedQuery}&type=track`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        }
        throw new Error('Request failed!');
    }
    catch(error) {
        console.log(error);
    }
}