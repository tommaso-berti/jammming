export async function handleRedirectCallback() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const codeVerifier = localStorage.getItem('code_verifier');

    if (!code) return;

    const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: `${window.location.origin}/callback`,
        client_id: 'ce8ff54cf24a46e0a8c58921695cfcf4',
        code_verifier: codeVerifier
    });

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
    });

    const data = await response.json();

    if (data.access_token) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('expires_in', data.expires_in);
        window.location.href = '/';
    }
}