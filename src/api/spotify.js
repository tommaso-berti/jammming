import { getAccessToken } from '../auth/auth.js';

export function getUserProfile() {
    const token = getAccessToken();
    return fetch('https://api.spotify.com/v1/me', {
        headers: { Authorization: `Bearer ${token}` }
    }).then(res => res.json());
}

export function createPlaylist(userId, name, trackUris) {
    const token = getAccessToken();
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            public: true,
            description: 'Created with Jammming',
            tracks: trackUris
        })
    });
}

export async function searchTrack(query) {
    const token = getAccessToken();
    const encodedQuery = encodeURIComponent(query);

    try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodedQuery}&type=track`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
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