function generateRandomString(length) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from(crypto.getRandomValues(new Uint8Array(length)))
        .map(x => possible.charAt(x % possible.length))
        .join('');
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export async function redirectToSpotify() {
    const clientId = 'ce8ff54cf24a46e0a8c58921695cfcf4';
    const redirectUri = 'https://d37b50867cc7.ngrok-free.app/callback';
    const scopes = 'playlist-modify-public';

    const codeVerifier = generateRandomString(128);
    localStorage.setItem('code_verifier', codeVerifier);

    const codeChallenge = await generateCodeChallenge(codeVerifier);

    const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}&code_challenge_method=S256&code_challenge=${codeChallenge}`;
    window.location.href = url;
}